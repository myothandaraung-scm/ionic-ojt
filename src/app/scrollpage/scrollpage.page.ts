import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-scrollpage',
  templateUrl: './scrollpage.page.html',
  styleUrls: ['./scrollpage.page.scss'],
})
export class ScrollpagePage implements OnInit {
  items = [
    //{value:"Scroll infinite"}
  ];

  constructor(private route:Router) {
    for (var i = 0; i < 10; i++) {
      let data="scroll items"
      this.items.push(data + i);
    }
  }

  ngOnInit() {
  }
  doInfinite(): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        for (var i = 0; i < 30; i++) {
          let data="scroll items"
          this.items.push(data + i);
        }

        console.log('Async operation has ended');
        //resolve();
      }, 500);
    })
  }
  modalPage() {
    this.route.navigate(['navigation'])
  }
}
