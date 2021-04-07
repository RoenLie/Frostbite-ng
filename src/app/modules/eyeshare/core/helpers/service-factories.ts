let serviceModules: any[];
export const setServiceModules = async () => {
  if (!serviceModules) {
    const modules: any[] = await Promise.all([
      import("src/app/modules/eyeshare/#implement/#services.cus"),
      import("src/app/modules/eyeshare/#implement/#services.int")
    ]);

    serviceModules = modules;
  }

  return serviceModules;
};

export const EsServiceFactory = (service: any) => {
  let resolvedService = new service();

  const modules = serviceModules;

  modules.some((module: any) =>
    Object.values(module).some((obj: any) => {
      const cls = new obj();

      const instanceOf = obj instanceof service;
      if (instanceOf) resolvedService = cls;
      return instanceOf;
    })
  );

  return resolvedService;
};

// export const EsServiceAsync = async (service: any) => {
//   let resolvedService = new service();

//   /**
//    * DOES NOT WORK BECAUSE REQUIRE DOES NOT EXIST
//    * This method works but it does not split implement files into seperate bundles.
//    * Benefit of not needing files vs perfomance/bundle impact should be evaluated
//    * Could possible use one or the other depending on DEV or PROD environment
//    */
//   // var require: any;
//   // const imports: Promise<any>[] = []
//   // try { imports.push(require("src/app/modules/eyeshare/implement/#implement.cus")); } catch (e) { }
//   // try { imports.push(require("src/app/modules/eyeshare/implement/#implement.int")); } catch (e) { }
//   // const modules: any[] = await Promise.all([imports]);


//   /**
//    * Version above does not currently work due to missing require function.
//    * This method requires all 3 implement files to exist, but has tree shaking.
//    */
//   const modules: any[] = await Promise.all([
//     import("src/app/modules/eyeshare/#implement/#services.cus"),
//     import("src/app/modules/eyeshare/#implement/#services.int")
//   ]);


//   // -------------------------------------------------------------------------------
//   /**
//    * Loops through resolved modules then all exports and tries to
//    * find a module that matches the supplied base service class
//    */

//   /**
//    * basic for loop version
//    */
//   // for (let i = 0; i < modules.length; i++) {
//   //   const exports = Object.values(modules[i]);
//   //   for (let j = 0; j < exports.length; j++) {
//   //     const obj: any = exports[j];
//   //     const cls = new obj();

//   //     /* seems to be faster than checking proto, requires more boilerplate */
//   //     /* Checks using the Symbol.toStringTag set on the base class. */
//   //     const isTypeOf = resolvedService.toString() == cls.toString();
//   //     if (isTypeOf) {
//   //       resolvedService = cls;
//   //       j = exports.length
//   //       i = modules.length
//   //     }

//   //     /* Checks if class has base class anywhere in hierarki */
//   //     // const isProto = service.isPrototypeOf(obj);
//   //     // if (isProto) {
//   //     //   resolvedService = cls;
//   //     //   j = exports.length
//   //     //   i = modules.length
//   //     // }
//   //   }
//   // }

//   /**
//    * functional version.
//    * more clean, no noticeable performance or memory impact.
//    */
//   modules.some((module: any) =>
//     Object.values(module).some((obj: any) => {
//       const cls = new obj();

//       /* Work by implementing custom Symbol.hasInstance on class. */
//       const instanceOf = obj instanceof service;
//       if (instanceOf) resolvedService = cls;
//       return instanceOf;

//       /* seems to be faster than checking proto, requires more boilerplate */
//       /* Checks using the Symbol.toStringTag set on the base class. */
//       // const isTypeOf = resolvedService.toString() == cls.toString();
//       // if (isTypeOf) resolvedService = cls;
//       // return isTypeOf

//       /* Checks if class has base class anywhere in hierarki */
//       // const isProto = service.isPrototypeOf(obj);
//       // if (isProto) resolvedService = cls;
//       // return isProto
//     })
//   );

//   return resolvedService;
// };