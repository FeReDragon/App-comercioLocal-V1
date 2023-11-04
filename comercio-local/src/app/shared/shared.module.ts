import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent,  
    FooterComponent,  
    DashboardComponent
  ]
})
export class SharedModule { }