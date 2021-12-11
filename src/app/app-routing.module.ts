import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavfooterbarComponent } from './components/navfooterbar/navfooterbar.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { CompanyComponent } from './pages/company/company.component';
import { LandingComponent } from './pages/landing/landing.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileUserComponent } from './pages/profile-user/profile-user.component';
import { ShopKartComponent } from './pages/shop-kart/shop-kart.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
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
      path: 'categories/companies',
      component: CompaniesComponent
  },
  {
      path: 'categories/companies/company',
      component: CompanyComponent
  },
  {
      path: 'categories/companies/company/shopping-cart',
      component: ShopKartComponent
  },
  {
      path: 'categories/companies/company/shopping-cart/ubicacion',
      component: UbicacionComponent
  },
  {
      path: 'app',
      component: NavfooterbarComponent,
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
