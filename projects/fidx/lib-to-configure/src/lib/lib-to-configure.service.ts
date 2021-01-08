import { LibConfigurationProvider, LibToConfigureConfiguration } from './lib-configuration';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibToConfigureService {

  constructor(private config: LibConfigurationProvider) { }

  getConfig(): LibToConfigureConfiguration {
    return this.config.config;
  }
}
