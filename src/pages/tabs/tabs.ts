import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { CardapioPage } from '../cardapio/cardapio';
import { ContatoPage } from '../contato/contato';
import { LojasPage } from '../lojas/lojas';
import { HomePage } from '../home/home';
import { MensagemPage } from '../mensagem/mensagem';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = CardapioPage;
  tab5Root = LojasPage;
  tab6Root = ContatoPage;
  tab7Root = MensagemPage;

  constructor() {

  }
}
