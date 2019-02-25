import {
  NgModule
} from '@angular/core';

import {
  SkyCodeBlockModule
} from './public';

// Specify entry components, module-level providers, etc. here.
import {
  AppSkyModule
} from './app-sky.module';

@NgModule({
  imports: [
    SkyCodeBlockModule
  ],
  exports: [
    AppSkyModule,
    SkyCodeBlockModule
  ],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
