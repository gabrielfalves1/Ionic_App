import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, getDoc, getDocs, query, doc } from '@angular/fire/firestore';
import { Produto } from '../model/produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  private firestore: Firestore = inject(Firestore);
  private produtoCollection = collection(this.firestore, 'products');

  add(produto: Produto) {
    return addDoc(this.produtoCollection, <Produto>{
      nome: produto.nome,
      categoria: produto.categoria,
      descricao: produto.descricao,
      quant: produto.quant,
      valor: produto.valor,
      foto: produto.foto,
    })
  }

  async list() {
    //return collectionData(query(this.rpdotuoCollection));
    const result = await getDocs(query(this.produtoCollection))
    return result.docs.map(doc => ({ _id: doc.id, ...doc.data() }));

  }

  async produtoId(id: string) {
    const result = await getDoc(doc(this.firestore, 'products', id));
    //return result.data();

    return { _id: result.id, ...result.data() }
  }


}
