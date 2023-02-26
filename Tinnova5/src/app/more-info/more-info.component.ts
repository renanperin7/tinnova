import { Component } from '@angular/core';
import { catchError, map, Observable, of, take } from 'rxjs';
import { Carros } from '../carros/carros-lista/carro';
import { CarrosService } from '../carros/carros.service';
import { AlertModalService } from '../shared/alert-modal.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css'],
})
export class MoreInfoComponent {
  carros$!: Observable<Carros[]>;
  quantidade: number = 0;
  carroNaoVendido: Carros[] = []

  decada1990: number = 0
  decada2000: number = 0
  decada2010: number = 0
  decada2020: number = 0

  chevrolet: string = ''
  hyundai: string = ''
  honda: string = ''
  posts: Carros[] = []

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

    this.getVendido()
    this.getCarroVendido()

    this.getDecada(1990, 2000).subscribe((count: number) => this.decada1990 = count);
    this.getDecada(2000, 2010).subscribe((count: number) => this.decada2000 = count);
    this.getDecada(2010, 2020).subscribe((count: number) => this.decada2010 = count);
    this.getDecada(2020, 2030).subscribe((count: number) => this.decada2020 = count);

    this.getMarca('Chevrolet').subscribe((marca: string) => this.chevrolet = marca)
    this.getMarca('Hyundai').subscribe((marca: string) => this.hyundai = marca)
    this.getMarca('Honda').subscribe((marca: string) => this.honda = marca)

    this.carrosService.getPostsFromLastWeek().subscribe(posts => this.posts = posts)
  }

  handleError() {
    this.alertModalService.showAlertDanger(
      'Erro ao carregar. Tente novamente mais tarde.'
    );
  }

  getVendido() {
    this.carrosService.list().subscribe((dados: any) => {
      const carroVendido = dados.filter((objeto: any) => objeto.vendido === 0);

      this.quantidade = carroVendido.length
    });
  }

  getCarroVendido() {
    this.carrosService.list().subscribe((dados: any[]) => {
      this.carroNaoVendido = dados.filter((objeto: any) => objeto.vendido === 0);
    });
  }

  getDecada(start: number, end: number): Observable<number> {
    return this.carrosService.list().pipe(
      map((carros: any[]) => {
        return carros.filter((carro: any) => carro.ano >= start && carro.ano < end).length;
      })
    );
  }

  getMarca(fabricante: string): Observable<any> {
    return this.carrosService.list().pipe(
      map((carros: any[]) => {
        return carros.filter((carro: any) => carro.marca === fabricante).length
      })
    )
  }

}
