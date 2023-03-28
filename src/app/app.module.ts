
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ServicesComponent } from './services/services.component';
import { ComponentsComponent } from './components/components.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShoppingCategoriesComponent } from './components/shopping-categories/shopping-categories.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListViewComponent } from './components/product-list-view/product-list-view.component';
import { SingleProductViewComponent } from './components/single-product-view/single-product-view.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    // ServicesComponent,
    ComponentsComponent,
    NavbarComponent,
    ShoppingCategoriesComponent,
    AdvertisementComponent,
    LoginScreenComponent,
    ProductCardComponent,
    ProductListViewComponent,
    SingleProductViewComponent,
    FooterComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
