import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage),
    canActivate: [authGuard]
  },
  {
    path: 'photo',
    loadComponent: () => import('./pages/photo/photo.page').then( m => m.PhotoPage),
    canActivate: [authGuard]
  },
  {
    path: 'character-list',
    loadComponent: () => import('./pages/character-list/character-list.page').then( m => m.CharacterListPage),
    canActivate: [authGuard]
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage),
    canActivate: [authGuard]
  },
];
