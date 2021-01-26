import { Injectable } from '@angular/core';
import { LibToConfigureService } from '@fidx/lib-to-configure';

@Injectable({providedIn: 'root'})
export class ApiService {
  private configuration: any;

  constructor(private config: LibToConfigureService) {
    this.configuration = this.config.getConfig();
  }

  test(): any {
    console.log('Calling Testing!', this.config.getConfig());
    return this.configuration;
  }
}
