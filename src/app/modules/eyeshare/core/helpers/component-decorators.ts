import 'reflect-metadata'
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentDepsConfig, getComponentDef, getDirectiveDefs, getPipeDefs, sleep } from './utils';
// ----------------------------------------------------------------------------
let modules: any[];
export const setModules = async () => {
  if (modules) {
    return await modules;
  }

  modules = await Promise.all([
    import("src/app/modules/eyeshare/#implement/#components.cus"),
    import("src/app/modules/eyeshare/#implement/#components.int")
  ]);

  return modules;
}
export const getModules = () => modules;
// ----------------------------------------------------------------------------

/**
 * @description
 * Eye-share custom decorator that enables the use of async services.
 * 1. Performs a resolution of async services in the constructor step.
 * 2. Enhanced any existing lifecycle hooks with an async await to allow
 *    the async services to resolve before performing the lifecycle hook.
 * 3. Modifies or creates the ngOnDelete lifecycle hook and allows it to
 *    automaticly unsubscribe to any rxjs properties on the class.
 * @usageNotes
 * Add this decorator to the top of a component.
 * ```
 * @EsInitialize
 * @Component({
 *   selector: 'es-sub-portal',
 *   template: `
 *     <p>sub-portal SYS</p>
 *     <span>{{message}}</span>
 *     <es-child></es-child>`,
 *   styles:[``]
 * })
 * ```
 * @author Kristoffer Roen-Lie
 */
export function EsInitialize<T extends { new(...args: any[]): {}; }>(Base: T) {
  // sleep(100);
  return class extends Base {
    static [Symbol.hasInstance](instance: any) { return this.isPrototypeOf(instance); }
    constructor(...args: any[]) {
      super(...args);

      const t: any = this;
      const keys: any[] = Object.keys(this);
      const values: any[] = Object.values(this);

      /**
       * Start an async function to resolve the class services.
       */
      (async () => {
        const results = await Promise.all(values.map((value: any) => { 
          if (value && typeof value?.then == 'function') return value;
          return null;
        }))
  
        results.forEach((res: any, index: number) =>
        { if (res) t[keys[index]] = res; })
      })()
      
      /**
       * Go through the lifecyclehooks that require to be awaited and await
       * the resolution of the class services beofre proceeding.
       */
      const lifecyclesToResolve = ["ngOnInit"];
      lifecyclesToResolve.forEach(lch => {
        if (!Base.prototype[lch]) return;

        const previous = Base.prototype[lch].bind(this);
        Base.prototype[lch] = async function() {
          await Promise.all(values);
          previous();
        }
      })

      /**
       * Unsubscribe to all RXJS subscriptions before destroying the instance.
       */
      const onDestroy = Base.prototype.ngOnDestroy?.bind(this);
      Base.prototype.ngOnDestroy = function() {
        if (Base.prototype.ngOnDestroy) {
          onDestroy?.();
        }

        Object.entries(this).forEach((prop: any) => {
          if (prop[1]?.unsubscribe) {
            t[prop[0]].unsubscribe();
          }
        })
      }
    }
  };
}

export function EsResolveAsync() {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;

    descriptor.value = async function () {
      const t: any = this;
      const keys = Object.keys(t);
      const values = Object.values(t);

      const results = await Promise.all(values.map((value: any) => { 
        if (value && typeof value?.then == 'function') return value;

        return null;
      }))

      results.forEach((res: any, index: number) => {
        if (res) t[keys[index]] = res;
      })
      
      return fn.apply(this, arguments);
    }
  };
}

export function EsTimer(message?: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;

    if (!message) {
      message = target.constructor.name + " " + key;
    }

    descriptor.value = function () {
      console.time(message);
      const res = fn.apply(this, arguments);
      console.timeEnd(message);
      return res;
    }
  };
}

export function EsComponentDeps(config: ComponentDepsConfig) {
  return (component: any) => {
    // console.log("EsComponentDeps", component.name);
    const assign = (modules: any[]) => {
      const def = getComponentDef(component);

      def.schemas = [CUSTOM_ELEMENTS_SCHEMA];
      
      let directiveDefs: Array<any> = [];
      if (typeof def.directiveDefs === 'function') {
        directiveDefs = def.directiveDefs();
      }

      config.directives.forEach((dir: any, index: number) => {
        modules.some((module: any) =>
          Object.values(module).some((obj: any) => {
            const isInstanceOf = obj instanceof dir;
            if (isInstanceOf) {
              config.directives[index] = obj;
            }
            
            return isInstanceOf;
          }));
      });

      def.directiveDefs = [
        ...(directiveDefs),
        ...getDirectiveDefs(config.directives || []),
      ];

      def.pipeDefs = [
        ...getPipeDefs(config.pipes || [])
      ];
      // console.log("assignment completed");
    }

    if (modules) return assign(modules);

    (async () => assign(await setModules()))();
  };
}

export function EsComponent() {
  return (component: any) => {
    const def: any = getComponentDef(component);

    // def.factory = (...args: any[]) => {
    //   console.log(args);
    // }
  }
}