import { Injector } from "@angular/core";

export const layerProvider = (layer: any, services: Array<any>) => ({
  provide: services[0],
  useFactory: (injector: Injector) => {
    return layer.cus
      ? injector.get(services[2])
      : layer.int ? injector.get(services[1])
        : new services[0]();
  },
  deps: [Injector],
});


export const templateProvider = (template: number) => {
  const templates = [
    `<div>sys</div>`,
    `<div>int</div>`,
    `<div>cus</div>`
  ]

  // return templates[template];
  return `<div>cus</div>`;
};

export const style =
`
  * {
    color: red;
  }
` 