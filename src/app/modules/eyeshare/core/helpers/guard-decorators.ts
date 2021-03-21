export function EsInitGuard(Base: any) {
  console.log(Base.constructor);
  
  // return class extends Base {
  //   constructor(...args: any[]) {
  //     super(...args);

      

  //     // const t: any = this;
  //     // const keys: any[] = Object.keys(this);
  //     // const values: any[] = Object.values(this);
      
  //     // Base.prototype[RESOLVE_KEY] = values;

  //     // (async () => {
  //     //   const results = await Promise.all(values);

  //     //   for (let i = 0; i < results.length; i++) {
  //     //     const service = results[i];
          
  //     //     t[keys[i]] = service;
  //     //     Base.prototype[RESOLVE_KEY][i] = service;
  //     //   }
  //     // })()
  //   }
  // };
}