import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateEmpComponent } from '../create-emp/create-emp.component';
import { EmplistComponent } from '../emplist/emplist.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent, CreateEmpComponent, EmplistComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
