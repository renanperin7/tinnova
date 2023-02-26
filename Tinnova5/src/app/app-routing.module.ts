import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoreInfoComponent } from './more-info/more-info.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home', component: HomeComponent},
  {
    path: 'veiculos',
    loadChildren: () => import('./carros/carros.module').then(m => m.CarrosModule)
  },
  {
    path: 'veiculos/info', component: MoreInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
