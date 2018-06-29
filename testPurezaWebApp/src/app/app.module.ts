import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestPurezaComponent } from './test-pureza/test-pureza.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPurezaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
