import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaRestaurantesComponent } from './componentes/lista-restaurantes/lista-restaurantes.component';
import { HomeGastronomiaComponent } from './componentes/home-gastronomia/home-gastronomia.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ListaRestaurantesComponent,
    HomeGastronomiaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
  ]
})
export class GastronomiaModule { }
