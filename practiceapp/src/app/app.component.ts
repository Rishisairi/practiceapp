import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdddishComponent } from './adddish/adddish.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdddishComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'practiceapp';
}
