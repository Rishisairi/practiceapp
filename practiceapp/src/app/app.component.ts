import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdddishComponent } from './adddish/adddish.component';
import { AllrecipiesComponent } from './allrecipies/allrecipies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdddishComponent, AllrecipiesComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
