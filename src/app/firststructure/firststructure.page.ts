import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firststructure',
  templateUrl: './firststructure.page.html',
  styleUrls: ['./firststructure.page.scss'],
})
export class FirststructurePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  toggleTheme(event){
    console.log(event)
    if(event.detail.checked) {
      document.body.setAttribute('color-theme','dark')
    } else {
      document.body.removeAttribute('color-theme')
    }
  }
  registerForm() {
    this.router.navigate(['registerform'])
  }
}
