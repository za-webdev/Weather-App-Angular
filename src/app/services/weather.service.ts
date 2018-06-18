import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' // use to make requests to our database

@Injectable()
export class WeatherService {
		private key :any;
  constructor(private http:HttpClient) { 
  		this.key='&APPID=ee5258f6fe23a59f37175ceb65837846';

  }

  getCity(params,cb){
  	let url='http://api.openweathermap.org/data/2.5/weather?q='+params.city+"&units=imperial"+this.key;
  	this.http.get(url)
  	.subscribe(data=>cb(data));
  }

}
