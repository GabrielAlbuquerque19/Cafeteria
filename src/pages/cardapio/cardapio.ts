import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardapioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
})
export class CardapioPage {
  cardapio: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cardapio = [
      {'produto': 'Expresso Tradicional', 'preco': '9.50', 'foto': 'assets/imgs/expresso-tradicional.png'},
      {'produto': 'Expresso Mocha', 'preco': '10.90', 'foto': 'assets/imgs/expresso-mocha.png'},
      {'produto': 'Expresso doce de leite', 'preco': '10.90', 'foto': 'assets/imgs/expresso-docedeleite.png'},
      {'produto': 'Capuccino Tradicional', 'preco': '12.90', 'foto': 'assets/imgs/cappuccino-tradicional.png'},
      {'produto': 'Capuccino Canela', 'preco': '12.90', 'foto': 'assets/imgs/cappuccino-canela.png'},
      {'produto': 'Capuccino Chocolate', 'preco': '13.90', 'foto': 'assets/imgs/cappuccino-chocolate.png'},
      ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioPage');
  }

}
