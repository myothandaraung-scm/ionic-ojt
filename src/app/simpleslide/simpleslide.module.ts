import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimpleslidePageRoutingModule } from './simpleslide-routing.module';

import { SimpleslidePage } from './simpleslide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimpleslidePageRoutingModule
  ],
  declarations: [SimpleslidePage]
})
export class SimpleslidePageModule {}
