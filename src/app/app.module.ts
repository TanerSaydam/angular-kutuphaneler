import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { ToastrComponent } from './components/toastr/toastr.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

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