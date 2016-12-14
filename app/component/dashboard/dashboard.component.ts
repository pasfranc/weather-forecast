import { Component, OnInit } from '@angular/core';
import { Subject }          from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { City } from '../../shared/city';
import { CityService } from '../../shared/city.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  cities: City[] = [];
  selectedCity: City;
  private searchTermStream = new Subject<string>();

  onSelect(city: City): void {
    this.selectedCity = city;
  }

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getCities().then(
      cities => {
        this.cities = cities;
      });    
  }
  
}