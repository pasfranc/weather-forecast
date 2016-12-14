import { Component, Input } from '@angular/core';
import { WeatherService } from '../../shared/weather.service';
import { City } from '../../shared/city';
import { Forecast } from '../../shared/forecast'

@Component({
  moduleId: module.id,  
  selector: 'city-detail',
  templateUrl: 'city-detail.component.html',
  styleUrls: ['city-detail.component.css']
})

export class CityDetailComponent{
  constructor(
    private weatherService: WeatherService
  ) {}

  @Input()
  city: City;
  cityForecast: Forecast;


  ngOnChanges(): void {
   // this.weatherService.search(this.city.link).then(json => {
   //   if(json.query.results){
   //     this.cityDetails = json.query.results.location.city + ' - ' + json.query.results.location.country;
   //   }else{
   //     this.cityDetails = 'Errore lettura';
   //   }      
        this.weatherService.getForecast(this.city.link).then(res => this.cityForecast = res);
  } 

}