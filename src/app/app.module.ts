import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardListComponent } from './property/property-card-list/property-card-list.component';
import { HousingService } from './Service/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { ErrorPageComponent } from './SharedPage/error-page/error-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component'
import { UserService } from './Service/User/user-service.service';
import { AlertifyService } from './Service/Alertify/alertify.service';
import { AuthService } from './Service/auth/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule} from '@angular/material/menu';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap/tabs';
@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    NavBarComponent,
    PropertyCardListComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    ErrorPageComponent,
    UserLoginComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatMenuModule,
    TooltipModule.forRoot(),
    TabsModule.forRoot(),

  ],
  providers: [HousingService,UserService,AlertifyService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
