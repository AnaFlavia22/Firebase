import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecionarPage } from './selecionar.page';

const routes: Routes = [
  {
    path: '',
    component: SelecionarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecionarPageRoutingModule {}
