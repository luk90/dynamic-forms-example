import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ApplicationComponent } from './application.component';
import { SectionAComponent } from './section-a/section-a.component';
import { SectionBComponent } from './section-b/section-b.component';
import { SectionCComponent } from './section-c/section-c.component';
import { SectionDComponent } from './section-d/section-d.component';
import { SectionEComponent } from './section-e/section-e.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ApplicationComponent
  ],
  declarations: [ApplicationComponent, SectionAComponent, SectionBComponent, SectionCComponent, SectionDComponent, SectionEComponent]
})
export class ApplicationModule {
}
