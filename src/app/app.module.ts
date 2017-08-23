import { CanActivateAuthGuardService } from './can-activate-auth-guard.service';
import { UserAuthService } from './user-auth.service';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [UserAuthService, CanActivateAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
