import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DictionaryModule } from './dictionary/dictionary.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DictionaryDataService } from 'src/app/shared/services/dictionary-data.service';
import { AppmaterialModule } from './shared/appmaterial/appmaterial.module';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    DictionaryModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppmaterialModule
  ],
  providers: [DictionaryDataService],
  bootstrap: [AppComponent]
})
export class AppModule{ }
