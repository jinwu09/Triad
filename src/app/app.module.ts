import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './components/header/header.component';
=======
import { LoginComponent } from './login/login.component';
>>>>>>> 7738e061a722b8406a5d2748d61558b94fe12eba

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent
=======
    LoginComponent
>>>>>>> 7738e061a722b8406a5d2748d61558b94fe12eba
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
