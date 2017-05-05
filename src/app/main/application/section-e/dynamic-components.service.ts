import { Injectable } from '@angular/core';
import { SectionEAComponent } from './section-e-a/section-e-a.component';
import { SectionEBComponent } from './section-e-b/section-e-b.component';

@Injectable()
export class DynamicComponentsService {

  constructor() {
  }

  getComponents() {
    return [
      {select: 'ONE', radio: 'DOCUMENT', component: SectionEAComponent},
      {select: 'ONE', radio: 'STATEMENT', component: SectionEBComponent}
    ];
  }
}
