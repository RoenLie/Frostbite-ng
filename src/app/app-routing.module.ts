import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';
import { BrandResolverService } from "@/app/modules/root/resolvers/brand.resolver";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "main" },
  {
    path: "main", loadChildren: async () => (
      await import( "./modules/main/main.module" ) ).MainModule,
    data: {
      animation: "fade",
      brand: {
        navTitle: "Frostbite",
        logoPath: "assets/svg/frostbite_logo.svg"
      }
    },
    resolve: {
      brand: BrandResolverService
    }
  },
  {
    path: "qualihr", loadChildren: async () => (
      await import( "./modules/qualihr/qualihr.module" ) ).QualihrModule,
    data: {
      animation: "fade",
      brand: {
        navTitle: "Frostbite",
        logoPath: "assets/svg/frostbite_logo.svg"
      }
    },
    resolve: {
      brand: BrandResolverService
    }
  },
  {
    path: "es", loadChildren: async () => (
      await import( "./modules/eyeshare/core/router/eyeshare-router.module" ) ).EyeshareRouterModule,
    data: {
      animation: "fade",
      brand: {
        navTitle: "Eye-share",
        logoPath: "assets/svg/es-logo.svg"
      }
    },
    resolve: {
      brand: BrandResolverService
    }
  },
  {
    path: "three", loadChildren: async () => (
      await import( "./modules/three/routes/three.module" ) ).ThreeModule,
    data: {
      animation: "fade",
      brand: {
        navTitle: "Frostbite",
        logoPath: "assets/svg/frostbite_logo.svg"
      }
    },
    resolve: {
      brand: BrandResolverService
    }
  },
  {
    path: "404", loadChildren: async () => (
      await import( "./modules/error404/error404.module" ) ).Error404Module,
    data: {
      animation: "fade",
      brand: {
        navTitle: "Frostbite",
        logoPath: "assets/svg/frostbite_logo.svg"
      }
    },
    resolve: {
      brand: BrandResolverService
    }
  },
  {
    path: "**", redirectTo: "404", data: { animation: "fade" }
  }
];


@NgModule( {
  imports: [ RouterModule.forRoot( routes, {
    // preloadingStrategy: NoPreloading
    preloadingStrategy: PreloadAllModules
  } ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
