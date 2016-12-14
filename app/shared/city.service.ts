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
}
