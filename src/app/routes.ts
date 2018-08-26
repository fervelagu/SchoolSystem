import { AppComponent } from './app.component'
import { Routes } from '@angular/router'
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login',  component: LoginComponent }
]