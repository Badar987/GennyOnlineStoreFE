import { TestServiceService } from './Services/test-service.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GennyOnlineStoreFE';

  constructor(private TestServiceService: TestServiceService) {}

  ngOnInit() {
    this.GetWeatherForecast();
  }

  GetWeatherForecast() {
    this.TestServiceService.fntestapi().subscribe((data) => {
          alert('AppComponent GetWeatherForecast');
    }
)};
}
