import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { CarrosService } from '../carros.service';
import { AlertModalService } from './../../shared/alert-modal.service';
import { map, pipe, switchMap } from 'rxjs';

@Component({
  selector: 'app-carros-form',
  templateUrl: './carros-form.component.html',
  styleUrls: ['./carros-form.component.css'],
})
export class CarrosFormComponent implements OnInit {
  form!: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private carroService: CarrosService,
    private alertModalService: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    const carro = this.route.snapshot.data['carro']

    this.form = this.fb.group({
      id: [carro.id],
      veiculo: [carro.veiculo, [Validators.required]],
      marca: [carro.marca, [Validators.required]],
      ano: [carro.ano, [Validators.required]],
      descricao: [carro.descricao, [Validators.required]],
      vendido: [carro.vendido],
      created: [carro.created, [Validators.required]],
      updated: [carro.updated, [Validators.required]],
    });
  }


  onSubmit() {
    this.submitted = true;
    if(this.form.valid) {

      let msgSuccess = 'Carro criado com sucesso'
      let msgError = 'Erro ao criar carro'

      if(this.form.value.id) {
        msgSuccess = 'Carro editado com sucesso'
        msgError = 'Erro ao editar carro'
      }

      this.carroService.save(this.form.value).subscribe(
        success => {
          this.alertModalService.showAlertSuccess(msgSuccess),
          this.location.back();
        },
        error => {this.alertModalService.showAlertDanger(msgError)}
      )
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

  onToggle() {
    const vendido = this.form.get('vendido')
    vendido?.setValue(!vendido.value)
  }
}
