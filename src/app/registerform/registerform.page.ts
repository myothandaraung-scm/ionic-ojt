import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.page.html',
  styleUrls: ['./registerform.page.scss'],
})
export class RegisterformPage implements OnInit {

  data: any;
  isSubmitted = false;

  constructor(private router: Router) {
    this.data = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      address: '',
      phone: ''
    }
   }

  onSubmit(myForm: NgForm) {
    this.isSubmitted = true;
    console.log('---valid check---', myForm.valid);
    console.log(this.isSubmitted)
    if(myForm.valid)
    {
      console.log('myform')
    }
  }
  nextPage(){
    this.router.navigate(['photogallery']);
  }

  ngOnInit() {
  }

}
