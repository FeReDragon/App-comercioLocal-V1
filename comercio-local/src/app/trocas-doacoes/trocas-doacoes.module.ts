import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaItensComponent } from './componentes/lista-itens/lista-itens.component';
import { HomeTrocasDoacoesComponent } from './componentes/home-trocas-doacoes/home-trocas-doacoes.component';
import { CriacaoItensComponent } from './componentes/criacao-itens/criacao-itens.component';
import { EditDeletItensComponent } from './componentes/edit-delet-itens/edit-delet-itens.component';



@NgModule({
  declarations: [
    ListaItensComponent,
    HomeTrocasDoacoesComponent,
    CriacaoItensComponent,
    EditDeletItensComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TrocasDoacoesModule { }
