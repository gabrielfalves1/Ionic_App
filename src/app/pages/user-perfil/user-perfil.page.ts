import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.page.html',
  styleUrls: ['./user-perfil.page.scss'],
})
export class UserPerfilPage implements OnInit {

  constructor(
    private activatedRouter: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getParam()
  }

  user = new User;
  _id: string | null = null;
  imageSrc: string | undefined;

  getParam() {
    this._id = this.activatedRouter.snapshot.paramMap.get("id");
    if (this._id) {
      this.userService.get(this._id).then(res => {
        this.user = <User>res;
      })
    }
  }

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    const imageUrl = image.webPath;
    this.imageSrc = imageUrl;
    this.user.foto = this.imageSrc ? this.imageSrc : ""
  }

}
