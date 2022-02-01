import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleslidePage } from './simpleslide.page';

const routes: Routes = [
  {
    path: '',
    component: SimpleslidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimpleslidePageRoutingModule {}
