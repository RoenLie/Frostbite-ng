export function EsResolveAsync() {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;

    descriptor.value = async function() {
      await Promise.all(target["services"]);
      fn.apply(this, arguments);
    }
  };
}

export function EsInitialize<T extends { new(...args: any[]): {}; }>(Base: T) {
  return class extends Base {
    constructor(...args: any[]) {
      super(...args);

      const values = Object.values(this);
      Base.prototype.services = values;

      const entries: any = Object.entries(this);

      const t: any = this;

      values.forEach(async (service: any, index: number) => {
        const serviceTuple: any = entries.find((s: any) => s[1] == service);

        if (serviceTuple) {
          t[serviceTuple[0]] = await serviceTuple[1];
          Base.prototype.services[index] = t[serviceTuple[0]];
        }
      });
    }
  };
}

export function EsTimer(message?: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;

    descriptor.value = function () {
      console.time(message);
      fn.apply(this, arguments);
      console.timeEnd(message);
    }
  };
}