import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  username;
  @Output() dataService = new EventEmitter();

  constructor() { }
  public setuser(user) {
    localStorage.setItem('user', user);
  }
  public settoken(token) {
    localStorage.setItem('token', token);
  }
  public gettoken() {
    return localStorage.getItem('token');
  }
  public getuser() {
    return localStorage.getItem('user');
  }

  changeData(dataChild) {
    this.username = dataChild;
    // console.log(this.username);
    this.dataService.emit(this.username);
  }
}
