import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComerciosComponent } from './componentes/lista-comercios/lista-comercios.component';
import { HomeComercioComponent } from './componentes/home-comercio/home-comercio.component';




@NgModule({
  declarations: [
    ListaComerciosComponent,
    HomeComercioComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ComercioModule { }
