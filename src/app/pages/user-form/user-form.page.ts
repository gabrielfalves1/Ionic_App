import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.page.html',
  styleUrls: ['./user-form.page.scss'],
})
export class UserFormPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private userService: UserService,
    private activeRouter: ActivatedRoute
  ) { }

  user = new User()
  _id: string | null = null;

  ngOnInit() {
  }

  getParam() {
    this._id = this.activeRouter.snapshot.paramMap.get("id");
    if (this._id) {
      this.userService.get(this._id).then(res => {
        this.user = <User>res;
      })
    }
  }

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
        console.log(res);
        this.presentAlert("Aviso", "Cadastrado");
      })
      .catch((err) => {
        console.log(err);
        this.presentAlert("Erro", "Não cadastrado");
      })
  }



}
