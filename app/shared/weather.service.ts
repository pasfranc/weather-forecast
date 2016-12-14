import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Forecast } from './forecast';
import { FORECASTS } from './mock-forecast';

@Injectable()
export class WeatherService {
    private FORECAST_ENDPOINT:string = "http://query.yahooapis.com/v1/public/yql?q=";	
	private FORECAST_YQL_OPEN:string 	= "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='";
    private FORECAST_YQL_CLOSE:string = "')&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

  constructor(private http: Http) {}

    search (name: string) {
        var endPoint = this.FORECAST_ENDPOINT + this.FORECAST_YQL_OPEN + name + this.FORECAST_YQL_CLOSE;
        return this.http
                .get(endPoint)
            .toPromise()
            .then(res => res.json());
    }

    getForecast(name: string): Promise<Forecast> {
        var res:Forecast = null;
        console.log(name);
        if(name == 'vienna'){
            res = FORECASTS[0];
        } else if(name == 'hunenberg'){
            res = FORECASTS[1];
        } else if(name == 'como'){
            res = FORECASTS[2];
        }
        console.log(res);
        return Promise.resolve(res);
    }
}