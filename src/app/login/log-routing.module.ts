import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot([
      {
        path: 'singin',
        component: SinginComponent
      },
      {
        path: 'singup',
        component: SingupComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class LogRoutingModule { }
