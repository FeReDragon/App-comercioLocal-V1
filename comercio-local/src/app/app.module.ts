import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module'; 
import { SharedModule } from './shared/shared.module'; 
import { GastronomiaModule } from './gastronomia/gastronomia.module'; 
import { ComercioModule } from './comercio/comercio.module'; 
import { TrocasDoacoesModule } from './trocas-doacoes/trocas-doacoes.module'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule, 
    SharedModule, 
    GastronomiaModule, 
    ComercioModule, 
    TrocasDoacoesModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
