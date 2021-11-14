import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';


const routes: Routes = [

  {
    path: '',
    component: LandingComponent
  },
  {
      path: 'login',
      component: LoginComponent,
      /* children: [
        {
            path: 'recuperacion',
            component: ,
            outlet: 'modal'
        }
    ] */
  },
  {
      path: 'sign-up',
      component: RegisterComponent
  },
  {
      path: '**',
      redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [LoginComponent, RegisterComponent]
