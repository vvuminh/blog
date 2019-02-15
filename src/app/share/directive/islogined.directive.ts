import { Directive, ElementRef, Renderer, OnInit } from '@angular/core';
import { JwtService } from '../services/jwt.service';

@Directive({
  selector: '[appIslogined]'
})
export class IsloginedDirective implements OnInit {
  public user: string;

  constructor(
    private jwt: JwtService,
    private el: ElementRef,
    private renderer: Renderer,
  ) {
  }
  ngOnInit() {
    this.checklogin();
  }
  getUser() {

  }
  checklogin() {
    if (this.jwt.gettoken() !== null) {
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');

    } else {
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');

    }
    this.jwt.dataService.subscribe(
      username => {
        this.user = username;
        this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');
      }
    );
  }


}
