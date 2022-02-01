import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScrollpagePage } from './scrollpage.page';

const routes: Routes = [
  {
    path: '',
    component: ScrollpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScrollpagePageRoutingModule {}
