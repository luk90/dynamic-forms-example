import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ApplicationModule } from './main/application/application.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { ApplicationInputModule } from './main/application-input-decorator-example/application-input.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    ApplicationModule,
    BrowserAnimationsModule,
    ApplicationInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
