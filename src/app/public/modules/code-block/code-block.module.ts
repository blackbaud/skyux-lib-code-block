import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StacheCodeBlockComponent } from './code-block.component';
import {
  SkyI18nModule
} from '@skyux/i18n';

@NgModule({
  declarations: [
    StacheCodeBlockComponent
  ],
  imports: [
    CommonModule,
    SkyI18nModule
  ],
  exports: [
    StacheCodeBlockComponent
  ]
})
export class CodeBockModule { }
