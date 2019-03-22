import { DesignFormModule } from './modules/design-form/design-form.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesignFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
