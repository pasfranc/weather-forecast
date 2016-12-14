interface IForecastForDay {
    date: string;
    high: string;
    low: string;
    text: string;
    img: string;    
}

export class Forecast {
  city: string;
  country: string;
  forecast: IForecastForDay[];
}