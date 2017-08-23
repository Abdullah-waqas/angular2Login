import { CanActivateAuthGuardService } from './can-activate-auth-guard.service';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'welcome', component: WelcomeComponent, canActivate: [CanActivateAuthGuardService] },
    { path: '**', redirectTo: '/login' }
];