import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../services/produto.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController: AlertController, private produtoService: ProdutoService) { }

  produto = new Produto();

  async presentAlert(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['Fechar'],
    });

    await alert.present();
  }


  async save() {

    const response = await this.produtoService.addProduto(this.produto)

    this.presentAlert("Sucesso", "Produto adicionado com sucesso!")

    console.log(this.produto)
  }

}
