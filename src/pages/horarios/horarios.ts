import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HorariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horarios',
  templateUrl: 'horarios.html',
})
export class HorariosPage {
  horarios : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.horarios = [

      'SEG 10h-22h',
      'TER 10h-22h',
      'QUA 10h-22h',
      'QUI 10h-22h',
      'SEX 09h-00h',
      'SAB 09h-00h',
      'DOM 15h-21h',
      ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorariosPage');
  }

}
