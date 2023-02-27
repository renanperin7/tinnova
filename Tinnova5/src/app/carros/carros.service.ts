import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { delay, Observable, take, tap } from 'rxjs'

import { Carros } from './carros-lista/carro';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  private readonly API = `${environment.API}veiculos`

  constructor(private http: HttpClient) { }

  list(): Observable<Carros[]> {
    return this.http.get<Carros[]>(this.API)
    .pipe(
      delay(1000)
    )
  }

  loadByID(id: number) {
    return this.http.get<Carros[]>(`${this.API}/${id}`).pipe(take(1))
  }

  private create(carro: Carros) {
    return this.http.post(this.API, carro).pipe(take(1))
  }

  private update(carro: Carros) {
    return this.http.put(`${this.API}/${carro.id}`, carro).pipe(take(1))
  }

  save(carro: Carros) {
    if(carro.id) {
      return this.update(carro)
    }
    return this.create(carro)
  }

  delete(id: number | null) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1))
  }

  getPostsFromLastWeek(): Observable<Carros[]> {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const params = new HttpParams()
      .set('startDate', oneWeekAgo.toISOString())
      .set('endDate', new Date().toISOString());

    return this.http.get<Carros[]>(this.API, {params})
  }
}
