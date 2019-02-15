import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupComponent } from './singup/singup.component';
import { SinginComponent } from './singin/singin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { LogRoutingModule } from './log-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [SingupComponent, SinginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LogRoutingModule,
    MatProgressSpinnerModule
  ],
  exports : [
    SinginComponent,
    SingupComponent]
})
export class LoginModule { }
