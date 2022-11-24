import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneAboutComponent } from './phone-about/phone-about.component';
import { PhoneCartComponent } from './phone-cart/phone-cart.component';
import { PhoneHomeComponent } from './phone-home/phone-home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:PhoneHomeComponent,
  },
  {
    path:'about',
    component:PhoneAboutComponent,
  },
  {
    path:'shop',
    component:PhoneCartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
