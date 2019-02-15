import { Injectable } from '@angular/core';
// import {configvalue} from './configvalue';
import * as App from './config.const';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  public getURL(): string {
    return App.Config.apisr;
  }
}
