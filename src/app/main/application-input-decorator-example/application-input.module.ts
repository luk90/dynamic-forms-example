import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationInputComponent } from './application-input.component';
import { ApplicationInputStateService } from './application-input-state.service';
import { SectionAInputComponent } from './section-a-input/section-a-input.component';
import { SharedModule } from '../../shared/shared.module';
import { SectionEInputComponent } from './section-e-input/section-e-input.component';
import { SectionEAInputComponent } from './section-e-input/section-e-a-input/section-e-a-input.component';
import { SectionEBInputComponent } from './section-e-input/section-e-b-input/section-e-b-input.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ApplicationInputComponent
  ],
  declarations: [
    ApplicationInputComponent,
    SectionAInputComponent,
    SectionEInputComponent,
    SectionEAInputComponent,
    SectionEBInputComponent,
  ],
  providers: [
    ApplicationInputStateService
  ],
  entryComponents: [
    SectionEAInputComponent,
    SectionEBInputComponent
  ],
})
export class ApplicationInputModule {
}
