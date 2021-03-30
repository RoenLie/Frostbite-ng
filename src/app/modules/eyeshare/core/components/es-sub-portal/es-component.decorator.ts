import { EsSubPortalComponentCus } from "./es-sub-portal-cus.component";


export function EsComponent(testInput: string) {
  console.log(testInput);
  
  return (cmpType: any) => {
    const originalFactory = cmpType.ɵfac;
    console.log(originalFactory);

    const cus: any = EsSubPortalComponentCus
    // const cusFactory: any = cus.ɵfac;
    // console.log(cusFactory);
    

    
    cmpType.ɵfac = (...args: any[]) => {
      const cmp = originalFactory(...args);
      console.log(cmp);
      console.log(args);
      
      return cmp;
    }

    // console.log(cmpType);
    // console.log(Object.values(cmpType));
    

    // const originalFactory = cmpType.ngComponentDef.factory;
    // console.log(originalFactory);
    // cmpType.ngComponentDef.factory = (...args: any[]) => {
    //   const cmp = originalFactory(...args);

    //   console.log(cmp);

    //   return cmp;
    // }
    
    return cmpType;
    // return cus;
  }
}
