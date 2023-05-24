import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  addProduto(produto: Produto) {
    console.log("Produto adicionado com sucesso!")

  }

}
