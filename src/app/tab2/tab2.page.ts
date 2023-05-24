import { Component } from '@angular/core';
import { User } from '../model/user';
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private alertController: AlertController,
    //private userService:UserService
  ) { }

  user = new User()
  userService = new UserService();

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
    this.userService.add(this.user);
    console.log(this.user);
    this.presentAlert("Aviso", "Cadastrado");
  }


}
