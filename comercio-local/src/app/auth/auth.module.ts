import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TrocaSenhaResetComponent } from './componentes/troca-senha-reset/troca-senha-reset.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    TrocaSenhaResetComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class AuthModule { }
