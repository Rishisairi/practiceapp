import { Component } from '@angular/core';
import { AllrecipiesComponent } from '../allrecipies/allrecipies.component';

@Component({
  selector: 'app-recipelist',
  standalone: true,
  imports: [AllrecipiesComponent],
  templateUrl: './recipelist.component.html',
  styleUrl: './recipelist.component.scss',
})
export class RecipelistComponent {
  recipe_list: any;
}
