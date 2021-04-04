import { NgModuleFactory, Type } from '@angular/core';

// This will create a dedicated JS bundle for lazy module
export const lazyWidgets: { path: string, loadChildren: () => Promise<NgModuleFactory<any> | Type<any>> }[] = [
  {
    path: 'lazy',
    loadChildren: () => import('./lazy.module').then(m => m.LazyModule)
  }
];

// This function will work as a factory for injecting lazy widget array in the main module
export function lazyArrayToObj() {
  const result: any = {};
  for (const w of lazyWidgets) {
    result[w.path] = w.loadChildren;
  }
  return result;
}