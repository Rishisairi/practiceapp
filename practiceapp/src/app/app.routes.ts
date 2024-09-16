import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdddishComponent } from './adddish/adddish.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Addrecipes',
    component: AdddishComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
