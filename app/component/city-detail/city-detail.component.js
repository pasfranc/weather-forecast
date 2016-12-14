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
var weather_service_1 = require('../../shared/weather.service');
var city_1 = require('../../shared/city');
var CityDetailComponent = (function () {
    function CityDetailComponent(weatherService) {
        this.weatherService = weatherService;
    }
    CityDetailComponent.prototype.ngOnChanges = function () {
        var _this = this;
        // this.weatherService.search(this.city.link).then(json => {
        //   if(json.query.results){
        //     this.cityDetails = json.query.results.location.city + ' - ' + json.query.results.location.country;
        //   }else{
        //     this.cityDetails = 'Errore lettura';
        //   }      
        this.weatherService.getForecast(this.city.link).then(function (res) { return _this.cityForecast = res; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', city_1.City)
    ], CityDetailComponent.prototype, "city", void 0);
    CityDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'city-detail',
            templateUrl: 'city-detail.component.html',
            styleUrls: ['city-detail.component.css']
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], CityDetailComponent);
    return CityDetailComponent;
}());
exports.CityDetailComponent = CityDetailComponent;
//# sourceMappingURL=city-detail.component.js.map