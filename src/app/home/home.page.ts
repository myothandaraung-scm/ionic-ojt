import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  encodedData:any;
  scannedBarCode: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private menu: MenuController,private router: Router,private barcodeScanner: BarcodeScanner ) {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  clickMainPage() {
    console.log('ddd');
    this.router.navigate(['/main']);
  }
  nextPage() {
    this.router.navigate(['photogallery']);
  }
  /**scab bar code */
  scanBRcode() {
    this.barcodeScanner.scan().then(res=>{
      this.scannedBarCode = res
    }).catch(err=>{
      console.log(err);
      alert(err);
    })
  }
  /**generate barcode */
  generateBarCode() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE,this.encodedData).then(res=>{
      alert(res);
          this.encodedData = res;
    }).catch(err=>{
      alert(err)
    })
  }

}
