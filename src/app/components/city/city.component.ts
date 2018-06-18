import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import{WeatherService} from '../../services/weather.service'

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
	private url:any;
	private city: any;
  private cities:any;

  constructor(private route:ActivatedRoute,private router:Router,private ws:WeatherService) { }

  ngOnInit() {
    

    console.log(this.route.params['_value'])
    this.cities=['chicago','dallas','san+jose','burbank','washington','seattle'];
    if(this.cities.includes(this.route.params['_value'])){

  	this.route.params
  	.subscribe(
  			data=>{this.url=data;
          this.ws.getCity(this.url,(data2)=>{
            this.city=data2;
          })


        }
  		);
  	}	
  }

// }
