import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adddish',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adddish.component.html',
  styleUrl: './adddish.component.scss',
})
export class AdddishComponent {
  @Input() recipeadd: any;
  image = '';
  title = '';
  category = '';
  rating = '';
  summary = '';
  ingredients = '';
  timeToComplete = '';
  procedure = '';
  adddish() {
    this.recipeadd.push({
      poster: this.image,
      name: this.title,
      category: this.category,
      rating: this.rating,
      summary: this.summary,
      ingredients: this.ingredients,
      timeToComplete: this.timeToComplete,
      procedure: this.procedure,
    });
  }
}
