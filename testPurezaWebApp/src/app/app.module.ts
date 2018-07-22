import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http'; //Import para usar httpClient en toda la app
//Se agrega FormsModule para poder usar ngModel en la vista
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap'; //Import para bootstrap
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';

import { TestPurezaComponent } from './test-pureza/test-pureza.component';
import { MessagesComponent } from './messages/messages.component';
import { InicioTestPurezaComponent } from './inicio-test-pureza/inicio-test-pureza.component';
//Imports para usar API in-memory web api, que sirve para simular un servidor
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    TestPurezaComponent,
    MessagesComponent,
    InicioTestPurezaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
