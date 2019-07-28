import { NgModule, ModuleWithProviders } from '@angular/core';
import { ResponsiveDirective } from './directives/responsive.directive';
import { ResponsiveConfig } from './responsive-config'

@NgModule({
  declarations: [ResponsiveDirective],
  exports: [ResponsiveDirective]
})
export class ResponsiveModule {
  static forRoot(): ModuleWithProviders {
    const config = new ResponsiveConfig({
      xs: { min: -Infinity, max: 767 },
      sm: { min: 768, max: 991 },
      md: { min: 992, max: 1199 },
      lg: { min: 1200, max: Infinity }
    });

    return {
      ngModule: ResponsiveModule,
      providers: [
        {
          provide: ResponsiveConfig,
          useValue: config
        }
      ]
    };
  }
}
