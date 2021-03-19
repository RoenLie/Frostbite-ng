
declare type ServiceEntries = ServiceTuple[];
declare type ServiceTuple = [string, Service];
declare type Service = any;

export class EsComponent {
  #services: Service[];

  constructor(...services: Service[]) {
    this.#services = services;
    setTimeout(() => this.resolveServices(this.#services));
  }

  readonly resolveServices = (services: any) => {
    const entries: ServiceEntries = Object.entries(this);

    const t: any = this;
    services.forEach(async (service: ServiceTuple) => {
      const serviceTuple: ServiceTuple | undefined = entries.find(s => s[1] == service);

      if (serviceTuple) t[serviceTuple[0]] = await serviceTuple[1];
    });
  };

  readonly awaitServices = (): Promise<any> => Promise.all(this.#services);
}