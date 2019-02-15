import { Directive, HostListener, Renderer, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../services/jwt.service';

@Directive({
  selector: '[appNotlogin]'
})
export class NotloginDirective implements OnInit {
  user = null;
  constructor(private router: Router, private jwt: JwtService, private renderer: Renderer, private el: ElementRef) {
  }
  ngOnInit() {
    this.checklogin();
  }
  checklogin() {
    if (this.jwt.gettoken() !== null) {
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
    } else {
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');

    }
    this.jwt.dataService.subscribe(
      username => {
        this.user = username;
        this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
      }
    );
  }


}
