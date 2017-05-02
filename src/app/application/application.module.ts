import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ApplicationComponent } from './application.component';
import { SectionAComponent } from './section-a/section-a.component';
import { SectionBComponent } from './section-b/section-b.component';
import { SectionCComponent } from './section-c/section-c.component';
import { SectionDComponent } from './section-d/section-d.component';
import { SectionEComponent } from './section-e/section-e.component';
import { SectionEAComponent } from './section-e/section-e-a/section-e-a.component';
import { SectionEBComponent } from './section-e/section-e-b/section-e-b.component';
import { GlobalVariableService } from './global-variable.service';
import { ApplicationStateService } from './application-state.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ApplicationComponent
  ],
  declarations: [
    ApplicationComponent, SectionAComponent, SectionBComponent, SectionCComponent, SectionDComponent,
    SectionEComponent, SectionEAComponent, SectionEBComponent
  ],
  entryComponents: [
    SectionEAComponent,
    SectionEBComponent
  ],
  providers: [
    GlobalVariableService,
    ApplicationStateService
  ]

})
export class ApplicationModule {
}
