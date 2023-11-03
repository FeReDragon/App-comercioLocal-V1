import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComerciosComponent } from './componentes/lista-comercios/lista-comercios.component';
import { HomeComercioComponent } from './componentes/home-comercio/home-comercio.component';
import { SharedModule } from "../shared/shared.module";




@NgModule({
    declarations: [
        ListaComerciosComponent,
        HomeComercioComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class ComercioModule { }
