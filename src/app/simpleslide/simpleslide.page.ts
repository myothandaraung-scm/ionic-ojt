import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-simpleslide',
  templateUrl: './simpleslide.page.html',
  styleUrls: ['./simpleslide.page.scss'],
})
export class SimpleslidePage implements OnInit {

  constructor(private toastCtrl:ToastController) { }

  ngOnInit() {
  }
  option = {
    slidePreView:1.5,
    centerSlides:true,
    loop:true,
    spaceBetween:10,
    autoplay:true
  };
  showtoastMessage(){
    console.log('toast')
    // await this.toastCtrl.create({
    //   message: "This is toast message"
    // }).then(res=>res.present())
  }
}
