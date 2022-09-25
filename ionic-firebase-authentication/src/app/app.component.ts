import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public selectIndex = 0;
  public appPages = [
    { title: 'Produtos', url: 'cardapio', icon: 'restaurant' },
    { title: 'Comprar', url: 'selecionar', icon: 'cart' },
    { title: 'Finalizar sessão', url: 'dashboard', icon: 'arrow-forward' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
