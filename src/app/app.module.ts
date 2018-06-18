import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import {WeatherService} from './services/weather.service'
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CityComponent } from './components/city/city.component';
import {AppRoutingModule} from './app.routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({  //all components goes here
  declarations: [
    AppComponent,
    NavComponent,
    CityComponent
  ],
  imports: [  // all modules goes here
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,// its is the package for HttpClient
    FormsModule,



  ],
  providers: [WeatherService],  // in providers we have our services
  bootstrap: [AppComponent]
})
export class AppModule { }
