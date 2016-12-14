import { Forecast } from './forecast';

export const FORECASTS: Forecast[] = [
  {
    city: 'Vienna', 
    country:'Austria', 
    forecast: [
      {date:'14 Dec 2016', high:'4', low:'-4', text:'Rain', img:'http://openweathermap.org/img/w/09d.png'},
      {date:'15 Dec 2016', high:'3', low:'-1', text:'Mostly Cloudy', img:'http://openweathermap.org/img/w/04d.png'},
      {date:'16 Dec 2016', high:'3', low:'-1', text:'Partly Cloudy', img:'http://openweathermap.org/img/w/02d.png'}
    ]},
  {
    city: 'Hunenberg', 
    country:'Switzerland', 
    forecast: [
      {date:'14 Dec 2016', high:'4', low:'-2', text:'Mostly Cloudy', img:'http://openweathermap.org/img/w/04d.png'},
      {date:'15 Dec 2016', high:'3', low:'-1', text:'Partly Cloudy', img:'http://openweathermap.org/img/w/02d.png'},
      {date:'16 Dec 2016', high:'4', low:'-3', text:'Partly Cloudy', img:'http://openweathermap.org/img/w/02d.png'}
      ]},
  {
    city: 'Como', country:'Italy', 
    forecast: [
      {date:'14 Dec 2016', high:'9', low:'0', text:'Partly Cloudy', img:'http://openweathermap.org/img/w/02d.png'},
      {date:'15 Dec 2016', high:'8', low:'1', text:'Mostly Cloudy', img:'http://openweathermap.org/img/w/04d.png'},
      {date:'16 Dec 2016', high:'7', low:'0', text:'Mostly Sunny', img:'http://openweathermap.org/img/w/01d.png'}]}
];