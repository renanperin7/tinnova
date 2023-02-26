import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Carro } from '../carros-lista/carro';
import { CarrosService } from './../carros.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroResolverGuard implements Resolve<Carro> {

  constructor(
    private carrosService: CarrosService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Carro> {

    if(route.params && route.params['id']) {
      return this.carrosService.loadByID(route.params['id'])
    }

    return of({
      id: null,
      veiculo: null,
      marca: null,
      ano: null,
      descricao: null,
      vendido: null,
      created: null,
      updated: null
    })

  }
}
