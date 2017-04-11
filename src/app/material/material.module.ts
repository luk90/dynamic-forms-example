import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdInputModule } from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule
  ],
  declarations: []
})
export class MaterialModule {
}
