import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AboutComponent } from './componentes/pages/about/about.component';
import { HomeComponent } from './componentes/pages/home/home.component';
import { NewMomentComponent } from './componentes/pages/new-moment/new-moment.component';
import { MomentFormComponent } from './componentes/moment-form/moment-form.component';
import { MessagesComponent } from './componentes/messages/messages.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    NewMomentComponent,
    MomentFormComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
