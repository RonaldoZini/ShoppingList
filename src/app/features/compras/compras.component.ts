import { ProdutoService } from './../../core/services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../../core/models/produto';
import { Router } from '@angular/router';
import { CompraService } from '../../core/services/compra.service';
import { Compra } from '../../core/models/compra';
import { CompraItens } from '../../core/models/compra-itens';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.sass']
})
export class ComprasComponent implements OnInit {
  produtos: Produto[];
  carrinho: Produto[];
  compra: Compra;
  finalizado: boolean;

  constructor(
    private produtoService: ProdutoService,
    private compraService: CompraService
  ) {
    this.compra = new Compra;
    this.finalizado = false;
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

  datePicker_onChange(event: MatDatepickerInputEvent<Date>) {
    this.compra.dataHora = event.value.toISOString();
  }

  comprar() {
    this.carrinho.forEach(produto => {
      let compraitem: CompraItens = new CompraItens;

      compraitem.produto = produto;
      compraitem.quantidade = 1;

      this.compra.compraItens.push(compraitem);
    });

    this.compraService.post(this.compra).subscribe(e => console.log(e));
    this.finalizado = true;
  }
}
