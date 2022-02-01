import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirststructurePage } from './firststructure.page';

const routes: Routes = [
  {
    path: '',
    component: FirststructurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirststructurePageRoutingModule {}
