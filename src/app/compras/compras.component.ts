import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';
import { CompraService } from '../compra.service';
import { Compra } from '../compra';
import { CompraItens } from '../compra-itens';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.sass']
})
export class ComprasComponent implements OnInit {
  produtos: Produto[];
  carrinho: Produto[];
  compra: Compra;

  constructor(
    private produtoService: ProdutoService,
    private compraService: CompraService,
    private router: Router
  ) {
    this.compra = new Compra;
  }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos() {
    this.produtoService.getProdutos().subscribe(produtos => this.produtos = produtos);
  }

  adicionarProdutos(list: any) {
    this.carrinho = list.selectedOptions.selected.map(item => item.value);
  }

  comprar() {
    this.compra.atendente = 'Ronaldo';
    this.compra.dataHora = '2019-05-06T19:37:00';
    
    this.carrinho.forEach(produto => {
      let compraitem: CompraItens = new CompraItens;

      compraitem.produto = produto;
      compraitem.quantidade = 1;

      this.compra.compraItens.push(compraitem);
    });
    this.compraService.post(this.compra).subscribe(e => console.log(e));
  }

}
