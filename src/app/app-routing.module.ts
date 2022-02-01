import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'scrollpage',
    loadChildren: () => import('./scrollpage/scrollpage.module').then( m => m.ScrollpagePageModule)
  },
  {
    path: 'modalpage',
    loadChildren: () => import('./modalpage/modalpage.module').then( m => m.ModalpagePageModule)
  },
  {
    path: 'navigation',
    loadChildren: () => import('./navigation/navigation.module').then( m => m.NavigationPageModule)
  },
  {
    path: 'radiorange',
    loadChildren: () => import('./radiorange/radiorange.module').then( m => m.RadiorangePageModule)
  },
  {
    path: 'simpleslide',
    loadChildren: () => import('./simpleslide/simpleslide.module').then( m => m.SimpleslidePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
