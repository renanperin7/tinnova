import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, Subject, take, switchMap, EMPTY } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { AlertModalService } from './../../shared/alert-modal.service';
import { CarrosService } from '../carros.service';
import { Carros } from './carro';

@Component({
  selector: 'app-carros-lista',
  templateUrl: './carros-lista.component.html',
  styleUrls: ['./carros-lista.component.css']
})
export class CarrosListaComponent implements OnInit {

  bsModalRef!: BsModalRef;
  carroSelecionado!: Carros

  carros$!: Observable<Carros[]>;
  error$ = new Subject<boolean>();

  constructor(
    private carrosService: CarrosService,
    private alertModalService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
    ) {

  }

  ngOnInit() {
    this.onRefresh()
  }

  onRefresh() {
    this.carros$ = this.carrosService.list()
      .pipe(
        take(1),
        catchError(error => {
          console.log(error)
          this.handleError()
          return of()
        })
      )
  }

  handleError() {
    this.alertModalService.showAlertDanger('Erro ao carregar. Tente novamente mais tarde.')
  }

  onEdit(id: number | null) {
    this.router.navigate(['editar', id], { relativeTo: this.route})
  }

  onDelete(carro: Carros) {
    this.carroSelecionado = carro
    const result$ = this.alertModalService.showConfirm('Confirmação', 'Tem certeza que deseja remover esse carro?')
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.carrosService.delete(carro.id) : EMPTY)
    ).subscribe(
      success => {
        this.onRefresh()
        this.alertModalService.showAlertSuccess('Carro removido com sucesso.')
      },
      error => {
        this.alertModalService.showAlertDanger('Erro ao remover carro. Tente novamente mais tarde.')
      }
    )
  }

}
