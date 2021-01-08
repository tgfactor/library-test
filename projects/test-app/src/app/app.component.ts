import { LibToConfigureService } from 'projects/fidx/lib-to-configure/src/public-api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fidx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-app';
  constructor(private config: LibToConfigureService) {}

  ngOnInit(): void {
    console.log('THE CONFIG', this.config.getConfig());
  }
}
