import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ComponentsComponent } from './components/components.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShoppingCategoriesComponent } from './components/shopping-categories/shopping-categories.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ComponentsComponent,
    NavbarComponent,
    ShoppingCategoriesComponent,
    AdvertisementComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
