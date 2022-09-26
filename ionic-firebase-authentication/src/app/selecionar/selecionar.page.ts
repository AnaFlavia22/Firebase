import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecionar',
  templateUrl: './selecionar.page.html',
  styleUrls: ['./selecionar.page.scss'],
})
export class SelecionarPage implements OnInit {
  produtos : any[] = [
    {nomeDoProduto: 'Double Bacon', valor : 1, marcado: false},
    {nomeDoProduto: 'Combo', valor : 2, marcado: true},
    {nomeDoProduto: 'Cheese Salada', valor : 3, marcado: true},
    {nomeDoProduto: 'Cheese Bacon', valor : 4, marcado: true},
    {nomeDoProduto: 'Origin mk', valor : 5, marcado: false},
    {nomeDoProduto: 'Fritas Simples', valor : 6, marcado: false},
    {nomeDoProduto: 'Fritas com Bacon', valor : 7, marcado: false},
    {nomeDoProduto: 'Coca cola 350 ml', valor : 8, marcado: false},
    {nomeDoProduto: 'Suco de Laranja', valor : 9, marcado: false},
    {nomeDoProduto: 'Petit Gateau', valor : 10, marcado: false},
    {nomeDoProduto: 'Mousse de Maracujá', valor : 11, marcado: false},
  ];

  constructor() { }

  ngOnInit() {
  }

  exibirProdutos(){
    console.log(this.produtos);
  }

}