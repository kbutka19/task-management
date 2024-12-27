import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: async () => (await import('./pages/auth/auth.routes')).ROUTES,
  },
];
