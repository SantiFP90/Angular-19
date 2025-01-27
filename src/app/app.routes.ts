import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full',
  },
  {
    path: 'todo',
    loadComponent: () =>
      import('./features/todo/todo.component').then((m) => m.TodoComponent),
  },
];
