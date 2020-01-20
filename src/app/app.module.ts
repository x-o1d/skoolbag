import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AddSchoolComponent } from './components/add-school/add-school.component';
import { ListSchoolsComponent } from './components/list-schools/list-schools.component';
import { TextInputComponent } from './components/text-input/text-input.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSchoolComponent,
    ListSchoolsComponent,
    TextInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
