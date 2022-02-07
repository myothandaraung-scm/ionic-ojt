import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.page.html',
  styleUrls: ['./photogallery.page.scss'],
})
export class PhotogalleryPage implements OnInit {

  constructor(public photoService: PhotoService) { }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }
  
  getCamera() {
   this.photoService.addNewToGallery()
  }
}
