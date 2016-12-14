import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './component/dashboard/dashboard.component';
import { CityDetailComponent }  from './component/city-detail/city-detail.component';
import { CityService }          from './shared/city.service';
import { WeatherService }       from './shared/weather.service';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CityDetailComponent
  ],
  providers: [ CityService, WeatherService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }