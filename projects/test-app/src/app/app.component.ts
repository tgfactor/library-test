import { Component, OnInit } from '@angular/core';
import { LibToConfigureService } from '@fidx/lib-to-configure';
import { ApiService } from 'api';

@Component({
  selector: 'fidx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-app';
  constructor(private config: LibToConfigureService, private api: ApiService) {}

  ngOnInit(): void {
    console.log('THE CONFIG', this.config.getConfig());
    console.log('The API Service - ', this.api.test());
  }
}
