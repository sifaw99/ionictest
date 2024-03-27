import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'person-detail',
    loadChildren: () => import('./person-detail/person-detail.module').then( m => m.PersonDetailPageModule)
  },
  {
    path: 'person-add',
    loadChildren: () => import('./person-add/person-add.module').then( m => m.PersonAddPageModule)
  },
  {
    path: 'person-edit',
    loadChildren: () => import('./person-edit/person-edit.module').then( m => m.PersonEditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
