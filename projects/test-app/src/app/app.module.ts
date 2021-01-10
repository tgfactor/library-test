/* eslint-disable arrow-body-style */
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibConfigurationProvider, LibToConfigureConfiguration, LibToConfigureModule } from '@fidx/lib-to-configure';
import { AppComponent } from './app.component';

@Injectable({ providedIn: 'root' })
export class ConfigurationStore {
  private internalConfig!: LibToConfigureConfiguration;

  setConfig(config: LibToConfigureConfiguration): void {
    this.internalConfig = config;
  }

  getConfig(): LibToConfigureConfiguration {
    return this.internalConfig;
  }
}

@Injectable({ providedIn: 'root' })
export class ConfigFromApp implements LibConfigurationProvider {
  constructor(private configStore: ConfigurationStore) {}

  get config(): LibToConfigureConfiguration {
    return this.configStore.getConfig() || undefined;
  }
}

export function initApp(configurationStore: ConfigurationStore) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        configurationStore.setConfig({ name: 'Fabian' });
        resolve();
      }, 2000);
    });
  };
}

export function initAppWithHttp(
  configurationStore: ConfigurationStore,
  httpClient: HttpClient
) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return () => {
    return httpClient
      .get('http://localhost:4200/assets/config.json')
      .toPromise()
      .then((config: any) => {
        setTimeout(() => {
          console.log('HERE', config);
          configurationStore.setConfig(config);
        }, 2000);
      });
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LibToConfigureModule.forRoot({
      config: {
        provide: LibConfigurationProvider,
        useClass: ConfigFromApp
      }
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initAppWithHttp,
      multi: true,
      deps: [ConfigurationStore, HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
