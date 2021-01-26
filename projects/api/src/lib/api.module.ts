import { NgModule } from '@angular/core';

import { LibToConfigureModule } from '@fidx/lib-to-configure';
import { ApiComponent } from './api.component';

@NgModule({
  declarations: [ApiComponent],
  imports: [LibToConfigureModule
  ],
  exports: [ApiComponent]
})
export class ApiModule { }
