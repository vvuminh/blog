import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {DetailComponent} from './detail/detail.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot([
      {
        path: 'article/:id',
        component: DetailComponent
      }
    ])
  ],
  exports : [RouterModule]
})
export class ArticleRoutingModule { }
