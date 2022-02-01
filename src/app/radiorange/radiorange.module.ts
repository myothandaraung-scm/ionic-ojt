import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadiorangePageRoutingModule } from './radiorange-routing.module';

import { RadiorangePage } from './radiorange.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadiorangePageRoutingModule
  ],
  declarations: [RadiorangePage]
})
export class RadiorangePageModule {}
