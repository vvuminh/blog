import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { JwtService } from '../../services/jwt.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data;
  header;
  public GOOGLE_CLIENT_ID = '595859068135-ipi48mfmbbbp4hdcevciqr26kdoh9p5c.apps.googleusercontent.com';
  public GOOGLE_CLIENT_SECRET = 'MtE1YH6SigejLh-0Hh-E9UPJ';
  public GOOGLE_REDIRECT_URI = 'http://localhost:4200/singin';
  public GOOGLE_LINK_GET_TOKEN = 'https://accounts.google.com/o/oauth2/token';
  public GOOGLE_LINK_GET_USER_INFO = 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=';
  public GOOGLE_GRANT_TYPE = 'authorization_code';

  constructor(private router: Router, private jwt: JwtService, private http: HttpClient, private api: ApiService) {

  }

  user = localStorage.getItem('user');

  ngOnInit() {
    this.abc();
  }
  abc() {
    this.jwt.dataService.subscribe(username => this.user = username);
  }

  singin() {
    this.router.navigate(['/singin']);
  }
  singup() {
    this.router.navigate(['/singup']);

  }
  home() {
    this.router.navigateByUrl('');
  }
  newarticle() {
    localStorage.removeItem('slug');
    this.router.navigate(['/newarticle']);
    // window.location.reload();
  }
  setting() {
    this.router.navigateByUrl('seting');
  }
  public async profile() {
    this.router.navigateByUrl('profile');
    // this.data = await this.User.getuser()
    // console.log(this.data);

  }
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
    window.location.reload();
  }
  public gethttpoptions() {
    if (localStorage.getItem('token') == null) {
      return this.header = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    } else {
      return this.header = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        })
      };
    }
  }
  logingoogle() {
    // logingo0gle
    alert('ok')
  }
  public async GETParam() {
    this.api.getparams();
  }

}
