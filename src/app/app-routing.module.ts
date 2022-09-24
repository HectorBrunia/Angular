import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneAboutComponent } from './phone-about/phone-about.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
