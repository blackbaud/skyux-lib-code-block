import {
  NgModule
} from '@angular/core';

import {
  StacheCodeBlockModule
} from './public/modules';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    StacheCodeBlockModule
  ],
  exports: [
    StacheCodeBlockModule
  ],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
