import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
// import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-allrecipies',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './allrecipies.component.html',
  styleUrl: './allrecipies.component.scss',
})
export class AllrecipiesComponent {
  @Input() everyrecipe: any;
  // constructor(public MovielistService: RecipeServiceService) {
  //   this.everyrecipe = this.MovielistService.recipes;
  // }
  show = true;
  showDescription() {
    this.show = !this.show;
  }
  @Output() delete_the_recipe = new EventEmitter<any>();
  deleteMovie() {
    this.delete_the_recipe.emit(this.everyrecipe);
  }
}
