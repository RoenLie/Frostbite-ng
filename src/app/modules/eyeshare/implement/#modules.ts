export const EsModulePicker = async () => {
  const random = Math.floor((Math.random() * 2));
  const modules = [
    import("../core/modules/es-portal/es-portal.module"),
    // import("../core/modules/es-portal/es-portal-int.module"),
    // import("../core/modules/es-portal/es-portal-cus.module"),
  ]

  const mod: any = await modules[0];

  return mod[Object.keys(mod)[0]];
}