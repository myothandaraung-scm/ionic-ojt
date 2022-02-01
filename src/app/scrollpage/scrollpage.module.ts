import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScrollpagePageRoutingModule } from './scrollpage-routing.module';

import { ScrollpagePage } from './scrollpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollpagePageRoutingModule
  ],
  declarations: [ScrollpagePage]
})
export class ScrollpagePageModule {}
