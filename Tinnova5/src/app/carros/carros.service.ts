import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { enviroment } from '../../enviroments/enviroment';
import { delay, take, tap } from 'rxjs'

import { Carro } from './carros-lista/carro';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  private readonly API = `${enviroment.API}carros`

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Carro[]>(this.API)
    .pipe(
      delay(1000),
      tap(console.log)
    )
  }

  loadByID(id: any) {
    return this.http.get<Carro>(`${this.API}/${id}`).pipe(take(1))
  }

  private create(carro: Carro) {
    return this.http.post(this.API, carro).pipe(take(1))
  }

  private update(carro: Carro) {
    return this.http.put(`${this.API}/${carro.id}`, carro).pipe(take(1))
  }

  save(carro: Carro) {
    if(carro.id) {
      return this.update(carro)
    }
    return this.create(carro)
  }

  delete(id: any) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1))
  }
}
