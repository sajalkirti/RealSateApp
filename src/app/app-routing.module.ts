import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyCardListComponent } from './property/property-card-list/property-card-list.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { ErrorPageComponent } from './SharedPage/error-page/error-page.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const routes: Routes = [
  {path:"", component: PropertyCardListComponent},
  {path:"list-properties", component: PropertyCardListComponent},
  {path:"add-property", component: AddPropertyComponent},
  {path:"rent-property", component: PropertyCardListComponent},
  {path:"property-details/:id",component:PropertyDetailComponent},
  {path:"user/user-login",component:UserLoginComponent},
  {path:"user/user-register",component:UserRegisterComponent},
  {path: "**", component:ErrorPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
