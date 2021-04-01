import 'reflect-metadata'
import { getComponentDef } from './utils';


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
  return class extends Base {
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

export function EsComponent() {
  return (component: any) => {


    const def = getComponentDef(component);

    // console.log(def);
    
    // console.log(Object.entries(cmpType));
    // console.log(originalFactory);
    
    // console.log(cmpType.ɵfac);
    // console.log(cmpType.ɵcmp);




    // console.log(cmpType.ɵcmp.type);
    
    // cmpType.ɵcmp.type.ngOnDestroy = () => {
    //   if (cmpType.ɵcmp.type.ngOnDestroy) {
    //     cmpType.ɵcmp.type.ngOnDestroy();
    //     console.log("on destroy already existed");
    //   } else {
    //     console.log("on destroy did not exist before this");
    //   }
    // }

    // console.log(cmpType.ɵcmp.type);
    

    // cmpType.ɵfac = (...args: any[]) => {
    //   const comp = originalFactory(...args);
    //   console.log(Object.entries((comp)));
      

    //   return comp;
    // }




    // cmpType.ɵcmp.factory = (...args: any[]) => {

      

    //   // const cmp = originalFactory(...args);

    //   // console.log(args);
      
    //   // cmpType.ɵcmp.onDestroy = () => {
    //   //   if (cmp.ngOnDestroy) {
    //   //     cmp.ngOnDestroy();
    //   //     console.log("on destroy already existed");
    //   //   } else {
    //   //     console.log("on destroy did not exist before this");
    //   //   }
    //   // }

    //   // console.log(cmp);
      
    //   // return cmp;
    // }

    // console.log(cmpType);
    // console.log(Object.values(cmpType));
    

    // const originalFactory = cmpType.ngComponentDef.factory;
    // console.log(originalFactory);
    // cmpType.ngComponentDef.factory = (...args: any[]) => {
    //   const cmp = originalFactory(...args);

    //   console.log(cmp);

    //   return cmp;
    // }
    
    // return cmpType;
    // return cus;
  }
}