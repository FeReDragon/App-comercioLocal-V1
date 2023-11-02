import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/componentes/login/login.component';
import { RegistroComponent } from './auth/componentes/registro/registro.component';
import { ListaRestaurantesComponent } from './gastronomia/componentes/lista-restaurantes/lista-restaurantes.component';
import { HomeGastronomiaComponent } from './gastronomia/componentes/home-gastronomia/home-gastronomia.component';
import { ListaComerciosComponent } from './comercio/componentes/lista-comercios/lista-comercios.component';
import { HomeComercioComponent } from './comercio/componentes/home-comercio/home-comercio.component';
import { HomeTrocasDoacoesComponent } from './trocas-doacoes/componentes/home-trocas-doacoes/home-trocas-doacoes.component';
import { HeaderComponent } from './shared/componentes/header/header.component';
import { FooterComponent } from './shared/componentes/footer/footer.component';
import { DashboardComponent } from './shared/componentes/dashboard/dashboard.component';
import { ListaItensComponent } from './trocas-doacoes/componentes/lista-itens/lista-itens.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'lista-restaurantes', component: ListaRestaurantesComponent },
  { path: 'home-gastronomia', component: HomeGastronomiaComponent },
  { path: 'lista-comercios', component: ListaComerciosComponent },
  { path: 'home-comercio', component: HomeComercioComponent },
  { path: 'lista-itens', component: ListaItensComponent },
  { path: 'home-trocas-doacoes', component: HomeTrocasDoacoesComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
