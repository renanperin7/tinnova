import { Injectable, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {  Observable } from 'rxjs';
import { Carro } from '../carros/carros-lista/carro';
import { CarrosService } from '../carros/carros.service';

import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  deleteModalRef?: BsModalRef;

  carros$!: Observable<Carro[]>

constructor(private modalService: BsModalService, private carrosService: CarrosService) { }

private showAlert(message: string, type: AlertTypes, dismissTimeout?: number) {
  const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
  bsModalRef.content.type = type;
  bsModalRef.content.message = message;

  if(dismissTimeout) {
    setTimeout(() => bsModalRef.hide(), dismissTimeout)
  }
}

showAlertDanger(message: string) {
  this.showAlert(message, AlertTypes.DANGER)
}

showAlertSuccess(message: string) {
  this.showAlert(message, AlertTypes.SUCCESS, 2000)
}

showConfirm(title: string, msg: string, okTxt?: string, cancelTxt?: string) {
  const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
  bsModalRef.content.title = title;
  bsModalRef.content.msg = msg;

  if(okTxt) {
    bsModalRef.content.okTxt = okTxt;
  }

  if(cancelTxt) {
    bsModalRef.content.cancelTxt = cancelTxt;
  }

  return (<ConfirmModalComponent>bsModalRef.content).confirmResult
}

}
