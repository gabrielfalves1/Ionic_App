import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/model/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.page.html',
  styleUrls: ['./user-form.page.scss'],
})
export class UserFormPage implements OnInit {

  _id: string | null = null;

  ngOnInit() {
  }

  getParam() {
    this._id = this.activeRouter.snapshot.paramMap.get("id");

    if (this._id) {
      this.userService.getUserById(this._id).then(res => {
        this.user = <User>res;
      })
    }

  }

  constructor(private alertController: AlertController, private userService: UserService, private activeRouter: ActivatedRoute) { }

  public alertButtons = ['OK'];
  user = new User();
  confsenha = "";

  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Important message',
      message: texto,
      buttons: ['OK'],
    });

    await alert.present();
  }

  save() {

    this.userService.add(this.user)
      .then((res) => {

        console.log(res)
        this.presentAlert("Aviso", "Cadastrado");
      })
      .catch((err) => {
        console.log(err);
        this.presentAlert("Erro", "Não Cadastrado");
      });

  }

}