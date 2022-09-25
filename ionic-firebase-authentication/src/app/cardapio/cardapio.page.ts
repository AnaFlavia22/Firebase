import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  atualizar(event){
    console.log('Usuario solicitou a atualização');
    
    setTimeout(() => {
      console.log('Lista atualizada com sucesso!');
      event.target.complete();
    },2000);
  }
  
}
