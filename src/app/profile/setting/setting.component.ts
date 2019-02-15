import { Component, OnInit } from '@angular/core';
import { UserService } from '../../share/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  data: any;
  username: string;
  bio: string;
  email: string;
  image: string;
  info ;
  // params:any = {};

  constructor(private User: UserService, private router: Router) { }

  ngOnInit() {
    this.myprofile();
  }
  public async myprofile() {
    this.data = await this.User.getuser();
    this.username = this.data.user.username;
    this.email = this.data.user.email;
    this.bio = this.data.user.bio;
    this.image = this.data.user.image;

  }
  public async update() {
    const params: any = {
      'user': {
        email: this.email,
        bio: this.bio,
        image: this.image,
      }
    };
    console.log(params);
    this.info = await this.User.updateuser(params);
    console.log(this.info);
    this.router.navigateByUrl('profile');
  }

}
