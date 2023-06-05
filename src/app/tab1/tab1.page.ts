import { Component } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../model/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //Feito por Gabriel Ferreira Alves
  constructor(private produtoService: ProdutoService, private router: Router) { }

  produtos: Produto[] = [];

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.produtoService.list().then(res => {
      this.produtos = <Produto[]>res;
    })
  }

  limitarDescricao(descricao: string): string {
    if (descricao.length > 30) {
      return descricao.substring(0, 50) + '...';
    }
    return descricao;
  }

  viewProduto(_id: string) {

    this.router.navigate(['/tabs/produto', _id]);


  }

}
