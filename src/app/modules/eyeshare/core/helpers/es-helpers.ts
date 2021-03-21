export async function esServicesAsync(t: any) {
  const keys = Object.keys(t);
  const values = Object.values(t);

  const results = await Promise.all(values.map((value: any) => { 
    if (value && typeof value?.then == 'function') return value;

    return null;
  }))

  results.forEach((res: any, index: number) => {
    if (res) t[keys[index]] = res;
  })
}