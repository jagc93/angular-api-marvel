import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATH_CHARACTERS } from './constants/general.constants';

const routes: Routes = [
  {
    path: PATH_CHARACTERS,
    children: [
      { path: '', loadChildren: () => import('./sections/characters/characters.module').then(m => m.CharactersModule) }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: PATH_CHARACTERS }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
