export const EsServiceAsync = async (name: string) => {

  // This method works but it yeets tree shaking out the window.
  // declare var require: any;
  // const promises = []
  // try {
  //   promises.push(require("./implement.cus"));
  // } catch (error) {
  // }

  // try {
  //   promises.push(require("./implement.int"));
  // } catch (error) {
  // }

  // try {
  //   promises.push(require("./implement.sys"));
  // } catch (error) {
  // }
  // const module: any = promises.find((module: any) => module[name]);
  // const service: any = new module[name]();
  // return service;
  

  // this method requires all 3 implement files to exist, but has tree shaking.
  const modules = await Promise.all([
    import("../implement/implement.cus"),
    import("../implement/implement.int"),
    import("../implement/implement.sys"),
  ]);

  const module: any = modules.find((module: any) => module[name]);
  const service: any = new module[name]();

  return service;
}