import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecionarPageRoutingModule } from './selecionar-routing.module';

import { SelecionarPage } from './selecionar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecionarPageRoutingModule
  ],
  declarations: [SelecionarPage]
})
export class SelecionarPageModule {}
