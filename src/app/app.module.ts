import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import {ConfigService} from './share/config/config.service';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {UserService} from './share/services/user.service';
import {JwtService} from './share/services/jwt.service';
import { ArticleModule } from './article/article.module';
import {ProfileModule} from './profile/profile.module';
import { TestRxjsComponent } from 'src/app/test-rxjs/test-rxjs.component';


@NgModule({
  declarations: [
    AppComponent,
    TestRxjsComponent,
  ],
  imports: [
    BrowserModule,
    ShareModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ArticleModule,
    ProfileModule

  ],
  providers: [ConfigService, UserService, JwtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
