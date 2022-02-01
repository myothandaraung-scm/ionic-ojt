import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirststructurePageRoutingModule } from './firststructure-routing.module';

import { FirststructurePage } from './firststructure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirststructurePageRoutingModule
  ],
  declarations: [FirststructurePage]
})
export class FirststructurePageModule {}
