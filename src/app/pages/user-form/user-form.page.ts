import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.page.html',
  styleUrls: ['./user-form.page.scss'],
})
export class UserFormPage implements OnInit {

  ngOnInit() {
  }


  constructor(private alertController: AlertController, private userService: UserService) { }

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
    //this.userService.add(this.user);
    //console.log(this.user)
    this.presentAlert("Aviso", "Cadastrado");

  }

}
