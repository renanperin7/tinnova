import { Carros } from './../carros-lista/carro';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router } from '@angular/router';
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

  form = this.fb.group({
    id: [0],
    veiculo: ['', [Validators.required]],
    marca: ['', [Validators.required]],
    ano: ['', [Validators.required]],
    descricao: ['', [Validators.required]],
    vendido: [false],
    created: [''],
    updated: ['']
  });

  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private carroService: CarrosService,
    private alertModalService: AlertModalService,
    private location: Location,
    private route: Router
  ) {}

  ngOnInit() {
    if(this.route.url.split('/')[2] === 'editar') {
      this.carroService.loadByID(parseInt(this.route.url.split('/')[3])).subscribe({
      next: (result) => {
        console.log(result)
        this.form.patchValue({
          id: result[0].id,
          veiculo: result[0].veiculo,
          marca: result[0].marca,
          ano: result[0].ano,
          descricao: result[0].descricao,
          vendido: result[0].vendido,
          created: result[0].created,
          updated: result[0].updated
        });
      }
    })
  }
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

      const novoCarro: Carros = {id: this.form.value.id as number,
        veiculo: this.form.value.veiculo as string,
        marca: this.form.value.marca as string,
        ano: this.form.value.ano as string,
        descricao: this.form.value.descricao as string,
        vendido: this.form.value.vendido as boolean,
        created: this.form.value.created as string,
        updated: this.form.value.updated as string}

      this.carroService.save(novoCarro).subscribe(
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
