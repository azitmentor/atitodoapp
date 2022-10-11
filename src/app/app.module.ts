import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AddeditComponent } from './addedit/addedit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteButtonComponent } from './delete-button/delete-button.component'

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    LoginComponent,
    AddeditComponent,
    DeleteButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
