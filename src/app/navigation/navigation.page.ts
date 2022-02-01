import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LoadingController } from '@ionic/angular';
import {ConstantData} from '../const/config'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {
  id: any;
  data: any;
  enableBackdropDismiss = false;
  showBackdrop = false;
  shouldPropagate = false;
  constructor(private router: Router,private loadingController:LoadingController) { }

  ngOnInit() {
  }
  backdropClick() {
    this.router.navigateByUrl('main');  
  }
  async showLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  addData() {
    this.data = ConstantData.basedata
  }
  radiopage() {
    this.router.navigate(['radiorange'])
  }
}
