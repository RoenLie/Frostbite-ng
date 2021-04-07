// import 'reflect-metadata';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentDepsConfig, getComponentDef, getDirectiveDefs, getPipeDefs } from './utils';


let modules: any[];


// -----------  ASYNC CALL TO CACHE AVAILABLE CUSTOM COMPONENTS  ----------
export const setComponentModules = async () => {
    if ( modules ) return modules;

    modules = await Promise.all( [
        import( "src/app/modules/eyeshare/#implement/#components.cus" ),
        import( "src/app/modules/eyeshare/#implement/#components.int" )
    ] );

    return modules;
};


// ----------------  RETRIEVE THE CACHED CUSTOM COMPONENTS  ---------------
export const getComponentModules = () => modules;


// ------  WRAPS BASE COMPONENT AND PERFORM VARIOUS HELPER FUNCTIONS  -----
export function EsInitialize<T extends { new( ...args: any[] ): {}; }>( Base: T ) {
    return class extends Base {
        static [ Symbol.hasInstance ]( instance: any ) { return this.isPrototypeOf( instance ); }
        constructor ( ...args: any[] ) {
            super( ...args );

            const t: any = this;
            const keys: any[] = Object.keys( this );
            const values: any[] = Object.values( this );

            /**
             * Start an async function to resolve the class services.
             */
            ( async () => {
                const results = await Promise.all( values.map( ( value: any ) => {
                    if ( value && typeof value?.then == 'function' ) return value;
                    return null;
                } ) );

                results.forEach( ( res: any, index: number ) => { if ( res ) t[ keys[ index ] ] = res; } );
            } )();

            /**
             * Go through the lifecyclehooks that require to be awaited and await
             * the resolution of the class services beofre proceeding.
             */
            const lifecyclesToResolve = [ "ngOnInit" ];
            lifecyclesToResolve.forEach( lch => {
                if ( !Base.prototype[ lch ] ) return;

                const previous = Base.prototype[ lch ].bind( this );
                Base.prototype[ lch ] = async function () {
                    await Promise.all( values );
                    previous();
                };
            } );

            /**
             * Unsubscribe to all RXJS subscriptions before destroying the instance.
             */
            const onDestroy = Base.prototype.ngOnDestroy?.bind( this );
            Base.prototype.ngOnDestroy = function () {
                if ( Base.prototype.ngOnDestroy ) {
                    onDestroy?.();
                }

                Object.entries( this ).forEach( ( prop: any ) => {
                    if ( prop[ 1 ]?.unsubscribe ) {
                        t[ prop[ 0 ] ].unsubscribe();
                    }
                } );
            };
        }
    };
}


// ----------  DECORATOR WRAPS METHOD AND AWAITS ASYNC SERVICES  ----------
export function EsResolveAsync() {
    return function ( target: any, key: string, descriptor: PropertyDescriptor ) {
        const fn = descriptor.value;

        descriptor.value = async function () {
            const t: any = this;
            const keys = Object.keys( t );
            const values = Object.values( t );

            const results = await Promise.all( values.map( ( value: any ) => {
                if ( value && typeof value?.then == 'function' ) return value;

                return null;
            } ) );

            results.forEach( ( res: any, index: number ) => {
                if ( res ) t[ keys[ index ] ] = res;
            } );

            return fn.apply( this, arguments );
        };
    };
}


// ----  TIMER DECORATOR THAT LOGS OUT HOW LONG A METHOD TAKES TO RUN  ----
export function EsTimer( message?: string ) {
    return function ( target: any, key: string, descriptor: PropertyDescriptor ) {
        const fn = descriptor.value;

        if ( !message ) {
            message = target.constructor.name + " " + key;
        }

        descriptor.value = function () {
            console.time( message );
            const res = fn.apply( this, arguments );
            console.timeEnd( message );
            return res;
        };
    };
}


// -----------------  DECORATOR FOR INJECTING COMPONENTS  -----------------
export function EsComponentDeps( config: ComponentDepsConfig ) {
    return ( component: any ) => {
        const assign = ( modules: any[] ) => {
            const def = getComponentDef( component );

            def.schemas = [ CUSTOM_ELEMENTS_SCHEMA ];

            let directiveDefs: Array<any> = [];
            if ( typeof def.directiveDefs === 'function' ) {
                directiveDefs = def.directiveDefs();
            }

            config.directives.forEach( ( dir: any, index: number ) => {
                modules.some( ( module: any ) =>
                    Object.values( module ).some( ( obj: any ) => {
                        const isInstanceOf = obj instanceof dir;
                        if ( isInstanceOf ) {
                            config.directives[ index ] = obj;
                        }

                        return isInstanceOf;
                    } ) );
            } );

            def.directiveDefs = [
                ...( directiveDefs ),
                ...getDirectiveDefs( config.directives || [] ),
            ];

            def.pipeDefs = [
                ...getPipeDefs( config.pipes || [] )
            ];
            // console.log("assignment completed");
        };

        if ( config.directives.length ) {
            if ( modules ) return assign( modules );
            ( async () => assign( await setComponentModules() ) )();
        }
    };
}


// -------  DECORATOR THAT ENABLES INSTANCEOF FOR COMPONENT CLASSES  ------
export function EsBaseComponent() {
    return ( component: any ) => {
        const def: any = getComponentDef( component );
        const type = def.type;

        Object.defineProperty( type, Symbol.hasInstance, {
            value: function ( instance: any ) {
                return this.isPrototypeOf( instance );
            },
        } );
    };
}


// -------  DECORATOR THAT ENABLES INSTANCEOF FOR INJECTOR CLASSES  ------
export function EsBaseInjector() {
    return ( injector: any ) => {
        const def = injector.ɵprov;
        const type = def.token;

        Object.defineProperty( type, Symbol.hasInstance, {
            value: function ( instance: any ) {
                return this.isPrototypeOf( instance );
            },
        } );
    };
}