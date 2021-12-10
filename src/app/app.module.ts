import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPopper } from 'angular-popper';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './pages/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavfooterbarComponent } from './components/navfooterbar/navfooterbar.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { ProfileUserComponent } from './pages/profile-user/profile-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './pages/products/products.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { CompanyComponent } from './pages/company/company.component';
import { ProductComponent } from './pages/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    OrdersComponent,
    LandingComponent,
    NavbarComponent,
    NavfooterbarComponent,
    AboutUsComponent,
    CategoriesComponent,
    WishListComponent,
    ProfileUserComponent,
    ProductsComponent,
    CompaniesComponent,
    CompanyComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    NgxPopper,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
