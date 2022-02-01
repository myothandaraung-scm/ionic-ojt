import { Component, OnInit, Input  } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalpage',
  templateUrl: './modalpage.page.html',
  styleUrls: ['./modalpage.page.scss'],
})
export class ModalpagePage implements OnInit {
  @Input() model_title: string;
  @Input() card_title: string;

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }
}
