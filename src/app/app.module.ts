import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { QuickCartComponent } from './header/quickCart/quickCart.component';
import { QuickCartItemComponent } from './header/quickCart/cartItem/quickCartItem.component';
import { QuickLinkComponent } from './header/quickLink/quickLink.component';
import { SlideShowComponent } from './home/slideShow/slideshow.component';
import {AppHighlightComponent} from './appHighlight/appHighlight.component';
import { FooterComponent } from './footer/footer.component';
import { BestsellerComponent } from './home/bestSeller/bestseller.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    QuickLinkComponent,
    QuickCartComponent,
    QuickCartItemComponent,
    SlideShowComponent,
    AppHighlightComponent,
    BestsellerComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AdminModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
