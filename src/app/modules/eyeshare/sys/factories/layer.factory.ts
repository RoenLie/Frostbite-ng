export const asyncFactory = async (name: string) => {
  const modules = await Promise.all([
    import("./implement.cus"),
    import("./implement.int"),
    import("./implement.sys"),
  ]);

  const module: any = modules.find((module: any) => module[name]);
  const service: any = new module[name]();

  return service;
}