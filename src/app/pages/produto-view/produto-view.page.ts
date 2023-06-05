import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';


@Component({
  selector: 'app-produto-view',
  templateUrl: './produto-view.page.html',
  styleUrls: ['./produto-view.page.scss'],
})
export class ProdutoViewPage implements OnInit {

  _id: string | null = null;
  produto = new Produto();

  constructor(private activeRouter: ActivatedRoute, private produtoService: ProdutoService, private router: Router) { }

  ngOnInit() {
    this.getParam();
  }

  getParam() {
    this._id = this.activeRouter.snapshot.paramMap.get("id");

    if (this._id) {
      this.produtoService.produtoId(this._id).then(res => {
        this.produto = <Produto>res;
        console.log(res);
      })


    }

  }


}
