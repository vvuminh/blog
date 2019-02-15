import { Injectable, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { JwtService } from '../services/jwt.service';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data;
  // @Output() dataService = new EventEmitter();
  httpOptions: object;
  public gethttpoptions() {
    if (localStorage.getItem('token') == null) {
      return this.httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    } else {
      return this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token')
        })
      };
    }
  }


  constructor(private config: ConfigService, private http: HttpClient, private jwt: JwtService) { }


  public POST(path: string, params?: object) {
    const URL = this.config.getURL() + path;
    // console.log(this.httpOptions);

    return this.http.post(URL, params, this.gethttpoptions()).toPromise();
  }
  public GET(path: string, params?) {
    const URL = this.config.getURL() + path;
    return this.http.get(URL, this.gethttpoptions()).toPromise();
  }
  public PUT(path: string, params: object) {
    const URL = this.config.getURL() + path;
    return this.http.put(URL, params, this.gethttpoptions()).toPromise();
  }
  public DELETE(path: string) {
    const URL = this.config.getURL() + path;
    return this.http.delete(URL, this.gethttpoptions()).toPromise();

  }
  public async getparams() {
    const URL = this.config.getURL() + '/api/articles';
    console.log(URL);

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    params = params.append('author', 'jacob');
    console.log(params.toString());
    return this.http.get(URL, { headers, params }).toPromise();
  }

}
