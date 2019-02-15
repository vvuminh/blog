import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { JwtService } from '../../share/services/jwt.service';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  info;
  profile;
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  constructor(private api: ApiService, private jwt: JwtService, private router: Router) { }
  public async login(params) {
    this.info = await this.api.POST('/api/users/login', params);
    this.jwt.settoken(this.info.user.token);
    this.jwt.setuser(this.info.user.username);
    this.jwt.changeData(this.info.user.username);
    this.router.navigateByUrl('');

  }
  public async register(params) {
   this.info =  await this.api.POST('/api/users', params);
   console.log(this.info);
   
    await this.jwt.settoken(this.info.user.token);
    await this.jwt.setuser(this.info.user.username);
    await this.jwt.changeData(this.info.user.username);
    this.router.navigateByUrl('');
    //this.router.navigateByUrl('/singin');
  }
  public getuser() {
    return this.api.GET('/api/user');
  }
  public async updateuser(params) {
    return this.api.PUT('/api/user', params);
  }
  public async followuser(username){
    const url = '/api/profiles/' + username + '/follow';
    console.log(url);
    return this.api.POST(url);
    //return this.apisr.DELETE(url);
  }
  public async unfollowuser(username){
    const url = '/api/profiles/' + username + '/follow';
    console.log(url);
    return this.api.DELETE(url);
  }
  public async profileuser(username){
    const url = '/api/profiles/' + username;
    return this.api.GET(url);
  }
}