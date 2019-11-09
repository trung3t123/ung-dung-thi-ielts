import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor( private location:Location, private alertCtrl: AlertController) { }
  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }
  async presentPrompt() {
    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'currentPassword',
          placeholder: 'Mật khẩu hiện tại',
          type: 'password'
        },
        {
          name: 'newPassword',
          placeholder: 'Mật khẩu mới',
          type: 'password'
        },
        {
          name: 'confirmPassword',
          placeholder: 'Xác nhận mật khẩu',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Thay đổi',
          handler: data => {
                if (data.newPassword == data.confirmPassword) {
                  console.log('True');
                  // logged in!
                } else {
                  console.log('False');
                }
          }
        }
        // {
        //   text: 'Login',
        //   handler: data => {
        //     if (User.isValid(data.username, data.password)) {
        //       // logged in!
        //     } else {
        //       // invalid login
        //       return false;
        //     }
        //   }
        // }
      ]
    });
    (await alert).present();
  }
  
}
