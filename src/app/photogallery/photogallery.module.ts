import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { PhotogalleryPageRoutingModule } from './photogallery-routing.module';

import { PhotogalleryPage } from './photogallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotogalleryPageRoutingModule
  ],
  declarations: [PhotogalleryPage]
})
export class PhotogalleryPageModule {}
