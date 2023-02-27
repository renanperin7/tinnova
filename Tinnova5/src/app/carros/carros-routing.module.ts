import { CarrosListaComponent } from './carros-lista/carros-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosFormComponent } from './carros-form/carros-form.component';

const routes: Routes = [
  { path: '', component: CarrosListaComponent },
  {
    path: 'novo',
    component: CarrosFormComponent
  },
  {
    path: 'editar/:id',
    component: CarrosFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrosRoutingModule {}
