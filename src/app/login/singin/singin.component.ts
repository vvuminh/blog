import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from '../../share/services/loading.service';
import { UserService } from '../../share/services/user.service';
import { JwtService } from '../../share/services/jwt.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private apiuser: UserService, private loading: LoadingService, private jwt: JwtService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  public async singin() {
    try {
      const val = this.form.value;
      const params: object = {
        'user': {
          email: val.email,
          password: val.password
        }
      }
      let responce = await this.apiuser.login(params);
      
    } catch (error) {
      alert('user sai email or password');
    }

    function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
  Singup() {
    this.router.navigate(['/singup']);

  }

}
