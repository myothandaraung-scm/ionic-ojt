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
  numTimesLeft = 5;  

  constructor(private route:Router) {
    for (var i = 0; i < 10; i++) {
      let data="scroll items"
      this.items.push(data + i);
    }
  }

  ngOnInit() {
  }
  doInfinite(event): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        for (var i = 0; i < 10; i++) {
          let data="scroll items"
          this.items.push(data + i);
        }
        this.numTimesLeft -= 1;
        console.log('Async operation has ended');
        event.target.complete()
        if (this.items.length == 40) {
          event.target.disabled = true;
        }
        
      }, 500);
    })
  }
  modalPage() {
    this.route.navigate(['navigation'])
  }
}
