import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { ToastrComponent } from './components/toastr/toastr.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SweetAlert2Component } from './components/sweet-alert2/sweet-alert2.component';

const routes: Routes = [
  {
    path: '',
    component: BootstrapComponent
  },
  {
    path: 'toastr',
    component: ToastrComponent
  }
]

@NgModule({
  declarations: [
    BootstrapComponent,
    ToastrComponent,
    NavbarComponent,
    SweetAlert2Component,    
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 20000,
      progressBar: true
    }), // ToastrModule added,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [NavbarComponent]
})
export class AppModule { }
