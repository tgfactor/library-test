import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { LibConfiguration, LibConfigurationProvider, DefaultLibConfiguration } from './lib-configuration';
import { LibToConfigureComponent } from './lib-to-configure.component';

@NgModule({
  declarations: [LibToConfigureComponent],
  imports: [CommonModule],
  exports: [LibToConfigureComponent]
})
export class LibToConfigureModule {
  static forRoot(
    libConfiguration: LibConfiguration
  ): ModuleWithProviders<LibToConfigureModule> {
    return {
      ngModule: LibToConfigureModule,
      providers: [
        libConfiguration.config || {
          provide: LibConfigurationProvider,
          useClass: DefaultLibConfiguration
        }
      ]
    };
  }
}
