"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var mock_forecast_1 = require('./mock-forecast');
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
        this.FORECAST_ENDPOINT = "http://query.yahooapis.com/v1/public/yql?q=";
        this.FORECAST_YQL_OPEN = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='";
        this.FORECAST_YQL_CLOSE = "')&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    }
    WeatherService.prototype.search = function (name) {
        var endPoint = this.FORECAST_ENDPOINT + this.FORECAST_YQL_OPEN + name + this.FORECAST_YQL_CLOSE;
        return this.http
            .get(endPoint)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    WeatherService.prototype.getForecast = function (name) {
        var res = null;
        console.log(name);
        if (name == 'vienna') {
            res = mock_forecast_1.FORECASTS[0];
        }
        else if (name == 'hunenberg') {
            res = mock_forecast_1.FORECASTS[1];
        }
        else if (name == 'como') {
            res = mock_forecast_1.FORECASTS[2];
        }
        console.log(res);
        return Promise.resolve(res);
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map