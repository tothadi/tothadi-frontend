import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { PrevWorkComponent } from './prev-work/prev-work.component';
import { IntroComponent } from './intro/intro.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GreetingComponent } from './greeting/greeting.component';
import { RdfComponent } from './rdf/rdf.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent,
    PrevWorkComponent,
    IntroComponent,
    PagenotfoundComponent,
    GreetingComponent,
    RdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
