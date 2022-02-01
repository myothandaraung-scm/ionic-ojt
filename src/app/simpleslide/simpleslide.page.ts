import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-simpleslide',
  templateUrl: './simpleslide.page.html',
  styleUrls: ['./simpleslide.page.scss'],
})
export class SimpleslidePage implements OnInit {

  constructor(private toastCtrl:ToastController,private router:Router) { }

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
  nextFirstStructurePage(){   
    console.log('ddddd')
    this.router.navigate(['firststructure']);
  }
}
