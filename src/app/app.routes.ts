import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'pitchlite',
    loadComponent: () => import('./components/pitchlite/pitchlite.page').then((m) => m.PitchComponent)
  },

  {
    path: 'scroll-image-page',
    loadComponent: () => import('./components/scroll-image-selector/scroll-image-test-page')
      .then((m) => m.ScrollImagePage),
  }
];
