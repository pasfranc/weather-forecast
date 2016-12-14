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
require('rxjs/add/operator/toPromise');
var mock_cities_1 = require('./mock-cities');
var CityService = (function () {
    function CityService(http) {
        this.http = http;
    }
    CityService.prototype.getCities = function () {
        return Promise.resolve(mock_cities_1.CITIES);
    };
    CityService.prototype.getCitiesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
        }) // delay 2 seconds
            .then(function () { return _this.getCities(); });
    };
    CityService.prototype.getCity = function (name) {
        var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + name + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
        this.http.get(url)
            .toPromise()
            .then(function (response) { return console.log(response); });
        return this.getCities()
            .then(function (cities) { return cities.find(function (city) { return city.name === name; }); });
    };
    CityService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CityService);
    return CityService;
}());
exports.CityService = CityService;
//# sourceMappingURL=city.service.js.map