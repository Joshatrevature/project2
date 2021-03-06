import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'
import { StripHtmlPipe } from './Pipes/striphtml';


import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GameCardsComponent } from './components/game-cards/game-cards.component';
import { UserService } from './services/user/user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CarouselComponent } from './components/carousel/carousel.component';

import { GamePageComponent } from './components/game-page/game-page.component';
import { HomeComponent } from './components/home/home.component';


import { FooterComponent } from './components/footer/footer.component';

import { ReviewSubmitComponent } from './components/review-submit/review-submit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { RegisterComponent } from './components/register/register.component';
import { RegisterService } from './services/register/register.service';
import { LoginService } from './services/login/login.service';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    CarouselComponent,
    GameCardsComponent,

    GamePageComponent,
    HomeComponent,

    FooterComponent,
    ReviewSubmitComponent,
    RegisterComponent,

    StripHtmlPipe



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [UserService, LoginService, RegisterService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
