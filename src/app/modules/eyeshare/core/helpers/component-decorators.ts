const RESOLVE_KEY = "_services";

export function EsInitialize<T extends { new(...args: any[]): {}; }>(Base: T) {
  return class extends Base {
    constructor(...args: any[]) {
      super(...args);

      const t: any = this;
      const keys: any[] = Object.keys(this);
      const values: any[] = Object.values(this);

      (async () => {
        const results = await Promise.all(values);

        for (let i = 0; i < results.length; i++) {
          const service = results[i];
          
          t[keys[i]] = service;
        }
      })()
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