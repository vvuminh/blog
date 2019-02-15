import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MyprofileComponent} from '../profile/myprofile/myprofile.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot([
      {
        path: 'profile/:id',
        component: MyprofileComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
