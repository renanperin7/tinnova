import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, take } from 'rxjs';
import { Carros } from '../carros/carros-lista/carro';
import { CarrosService } from '../carros/carros.service';
import { AlertModalService } from '../shared/alert-modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  carros$!: Observable<Carros[]>;

  constructor(
    private carrosService: CarrosService,
    private alertModalService: AlertModalService
  ) {}

  ngOnInit() {
    this.carros$ = this.carrosService.list().pipe(
      take(1),
      catchError((error) => {
        console.log(error);
        this.handleError();
        return of();
      })
    );
  }

  handleError() {
    this.alertModalService.showAlertDanger(
      'Erro ao carregar. Tente novamente mais tarde.'
    );
  }
}
