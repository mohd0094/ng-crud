import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthGuard } from './guard/auth.guard';



const routes: Routes = [

  { path: 'login', component: LoginComponent },
  {
    path: '',redirectTo: 'login',pathMatch: 'full'
  },
  { path: 'register', component: RegisterComponent },

  {
    path: '',
    loadChildren:() => import('./components/records/records.module').then(m => m.RecordsModules),canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }