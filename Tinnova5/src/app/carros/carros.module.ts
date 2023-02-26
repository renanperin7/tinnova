import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { CarrosRoutingModule } from './carros-routing.module';
import { CarrosListaComponent } from './carros-lista/carros-lista.component';
import { CarrosFormComponent } from './carros-form/carros-form.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        CarrosListaComponent,
        CarrosFormComponent
    ],
    exports: [
        CarrosListaComponent,
        CarrosFormComponent
    ],
    imports: [
        CommonModule,
        CarrosRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class CarrosModule { }
