import { Component, OnInit } from '@angular/core';
import { LibConfigurationProvider } from './lib-configuration';

@Component({
  selector: 'fidx-lib-to-configure',
  template: `<p>lib-to-configure works with {{configurationProvider.config | json}}</p>
`,
  styles: [
  ]
})
export class LibToConfigureComponent implements OnInit {

  constructor(
    public configurationProvider: LibConfigurationProvider
  ) {}

  ngOnInit(): void {
    console.log(this.configurationProvider.config);
  }
}
