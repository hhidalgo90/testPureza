import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Se agrega FormsModule para poder usar ngModel en la vista
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestPurezaComponent } from './test-pureza/test-pureza.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPurezaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
