import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestServiceService {
  private url = 'https://localhost:7073';

  constructor(private http: HttpClient) {}

  fntestapi() {
    return this.http.get(`${this.url}/WeatherForecast`);
  }
}
