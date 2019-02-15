import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {ListComponent} from './article/list/list.component';
import {HeaderComponent} from './share/layout/header/header.component';
import {NewarticleComponent} from './article/newarticle/newarticle.component';
// import {MyprofileComponent} from './profile/myprofile/myprofile.component';
import {MyprofileComponent} from './profile/myprofile/myprofile.component';
import {SettingComponent} from './profile/setting/setting.component';
import { TestRxjsComponent } from 'src/app/test-rxjs/test-rxjs.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ListComponent
      },
      {
        path : 'newarticle',
        component : NewarticleComponent
      },
      {
        path: 'profile',
        component: MyprofileComponent
      },
      {
        path : 'seting',
        component: SettingComponent
      },
      {
        path : 'test-rxjs',
        component: TestRxjsComponent
      },
      {
        path: 'home',
        component: ListComponent
      }
    ])
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
