import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';

import { City } from './city';
import { CITIES } from './mock-cities';

@Injectable()
export class CityService {
    constructor(private http: Http) { }

    getCities(): Promise<City[]> {
        return Promise.resolve(CITIES);
    }
    getCitiesSlowly(): Promise<City[]> {
        return new Promise<City[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getCities());
    }
    getCity(name: string): Promise<City> {
        const url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+name+'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
        this.http.get(url)
            .toPromise()
            .then(response => console.log(response));

        return this.getCities()
                    .then(cities => cities.find(city => city.name === name));
    }
}