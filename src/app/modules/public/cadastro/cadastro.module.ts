import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { CadastroRoutingModule } from './cadastro.routing.module';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule
  ],
  providers: []
})

export class CadastroModule { }
