import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { CartComponent } from './components/cart/cart.component';
import { ServicesService } from './services/services.service';

const routes: Routes = [
  {path:'', component:ComponentsComponent},
  {path:'cart', component: CartComponent, canActivate : [ServicesService]},
  {path: 'product', loadChildren:() => import('./product/product.module').then(openModule => openModule.ProductModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
