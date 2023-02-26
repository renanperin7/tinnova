import { CarrosListaComponent } from './carros-lista/carros-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosFormComponent } from './carros-form/carros-form.component';
import { CarroResolverGuard } from './guards/carro-resolver.guard';

const routes: Routes = [
  { path: '', component: CarrosListaComponent },
  {
    path: 'novo',
    component: CarrosFormComponent,
    resolve: {
      carro: CarroResolverGuard,
    },
  },
  {
    path: 'editar/:id',
    component: CarrosFormComponent,
    resolve: {
      carro: CarroResolverGuard,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrosRoutingModule {}
