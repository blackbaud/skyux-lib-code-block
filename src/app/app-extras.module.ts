import {
  NgModule
} from '@angular/core';

import {
  SkyDocsToolsModule
} from '@skyux/docs-tools';

import {
  SkyAppLinkModule
} from '@skyux/router';

import {
  SkyCodeBlockModule,
  SkyCodeModule
} from './public/public_api';

@NgModule({
  exports: [
    SkyAppLinkModule,
    SkyCodeBlockModule,
    SkyCodeModule,
    SkyDocsToolsModule
  ]
})
export class AppExtrasModule { }
