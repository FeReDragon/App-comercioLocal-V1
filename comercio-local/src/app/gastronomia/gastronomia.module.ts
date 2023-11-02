import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaRestaurantesComponent } from './componentes/lista-restaurantes/lista-restaurantes.component';
import { HomeGastronomiaComponent } from './componentes/home-gastronomia/home-gastronomia.component';



@NgModule({
  declarations: [
    ListaRestaurantesComponent,
    HomeGastronomiaComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class GastronomiaModule { }
