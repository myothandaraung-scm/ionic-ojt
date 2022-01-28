import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router,private alertCtrl:AlertController) { }

  ngOnInit() {
  }
  async loginUser() {
    let name = (document.getElementById('name') as HTMLInputElement).value;
    let password = (document.getElementById('password') as HTMLInputElement).value;
    console.log(name, password);
    await this.alertCtrl.create({
      header: 'Saving Information',
      message: 'Save your information?',
      inputs: [
        {type: 'text',name: 'username', value: name},
        {type: 'password',name: 'userpassword', value: password},
      ],
      buttons: [
        {
          text: 'Cancel',handler: (res) =>{
            this.router.navigate(['/home'])
          }
        },
        {text: 'Save',handler: (res) =>{
          this.router.navigate(['/home'])
          }
        },
      ]
    }
    ).then(res=>res.present());
  }

}
