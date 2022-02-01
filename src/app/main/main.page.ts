import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalpagePage } from '../modalpage/modalpage.page';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  modelData: any;
  constructor(private route: Router, public modalController: ModalController) { }

  ngOnInit() {
  }
  public listitems = [
    {val: "Environmental Policy",isChecked: true},
    {val: "Environmental Management",isChecked: false},
    {val: "Environmental Studies",isChecked: false}
  ];
  registerPage() {
    this.route.navigate(['register']);
  }
  async openIonModal() {
    const modal = await this.modalController.create({
      component: ModalpagePage,
      componentProps: {
        'model_title': "Card Model",
        'card_title' : "This is card model"
      }
    });

    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        console.log('Modal Data : ' + modelData.data);
      }
    });

    return await modal.present();
  }
}
