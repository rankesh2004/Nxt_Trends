import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductItemDetailsComponent } from './product-item-details/product-item-details.component';
import { authGuard } from './auth.guard';
import { PlaceOrderComponent } from './place-order/place-order.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"",
        component:HomeComponent,
        canActivate:[authGuard]
    },
    {
        path:"products", 
        component:ProductComponent,
        canActivate:[authGuard]
    },
    {
        path:"cart",
        component:CartComponent,
        canActivate:[authGuard]
    },
    {
        path:"products/:id",
        component:ProductItemDetailsComponent,
        canActivate:[authGuard]
    },
    {
        path:"payment-successfull",
        component:PlaceOrderComponent
    },
    {
        path:"**",
        component:NotFoundComponent
    }
];
