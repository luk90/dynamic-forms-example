import { SectionEAInputComponent } from './section-e-a-input/section-e-a-input.component';
import { SectionEBInputComponent } from './section-e-b-input/section-e-b-input.component';

export function getComponents() {
  return [
    {select: 'ONE', radio: 'DOCUMENT', component: SectionEAInputComponent},
    {select: 'ONE', radio: 'STATEMENT', component: SectionEBInputComponent}
  ];
}
