import { Component, OnInit } from '@angular/core';
import { ConstantData } from '../const/config';
import { Router } from '@angular/router'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-radiorange',
  templateUrl: './radiorange.page.html',
  styleUrls: ['./radiorange.page.scss'],
})
export class RadiorangePage implements OnInit {
  refreshdata:any;
  data:any;
  searchData: any;
  items: string[];
  constructor(private router:Router,private toastCtrl:ToastController) { 
    this.items = [
      'One D',
      'kon',
      'xo xo',
      'climax'
    ]
    this.searchData = ConstantData.searchData
   }

  ngOnInit() {
  }
  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      this.refreshdata = ConstantData.basedata
      event.target.complete();
    }, 2000);
  }
  search(value){
    console.log(value)
  }
  change(value){
    console.log(value)
    let search = this.searchData.filter(element => element.includes(value));
    console.log(search.length)
    if(value.length > 0){
      this.searchData = search
    } else{
      this.searchData = ConstantData.searchData
    }
    console.log(this.searchData)
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  nextSlidePage(){
    this.router.navigate(['simpleslide'])
  }
  async showtoastMessage(){
    console.log('toast')
    await this.toastCtrl.create({
      message: "This is toast message"
    }).then(res=>res.present())
  }
  onRenderItems(event) {  
    console.log(`Move item from ${event.detail.from} to ${event.detail.to}`);   
    const draggedItem = this.items.splice(event.detail.from, 1)[0];  
    this.items.splice(event.detail.to, 0, draggedItem);   
    event.detail.complete();  
  }  
  getList() {  
    console.table(this.items);   
  } 
}
