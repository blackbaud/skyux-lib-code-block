import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'app-code-docs',
  templateUrl: './code-docs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeDocsComponent { }
