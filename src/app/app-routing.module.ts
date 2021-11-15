import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { LandingComponent } from './pages/landing/landing.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileUserComponent } from './pages/profile-user/profile-user.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';

const routes: Routes = [

  {
    path: 'landing',
    component: LandingComponent
  },
  {
      path: 'login',
      component: LoginComponent,
  },
  {
      path: 'sign-up',
      component: RegisterComponent
  },
  {
      path: 'about-us',
      component: AboutUsComponent
  },
  {
      path: 'wish-list',
      component: WishListComponent
  },
  {
      path: 'profile-user',
      component: ProfileUserComponent
  },
  {
      path: 'categories',
      component: CategoriesComponent
  },
  {
      path: 'orders',
      component: OrdersComponent
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
