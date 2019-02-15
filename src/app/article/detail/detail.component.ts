import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../share/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtService } from '../../share/services/jwt.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public slug: string;
  public title = '';
  public author = '';
  public description = '';
  public obj: any;
  public favoriteCount: number;
  public favorited: boolean;
  public newCommand: string;
  public user: boolean = true;
  public check: boolean;

  constructor(private article: ArticleService, private route: ActivatedRoute, private jwt: JwtService, private router: Router) { }
  ngOnInit() {
    this.detailarticle();
  }
  public async detailarticle() {
    this.route.params.subscribe((params) => {
      this.slug = params['id'];
    });
    this.obj = await this.article.getarticle(this.slug);
    console.log(this.obj);
    this.title = this.obj.article.title;
    this.description = this.obj.article.description;
    this.author = this.obj.article.author.username;
    this.favoriteCount = this.obj.article.favoritesCount;
    this.favorited = this.obj.article.favorited;
    console.log(this.author);
    console.log(localStorage.getItem('user'));
    if(this.author == localStorage.getItem('user')){
      this.user = false;
      this.check = true
    }else{
      this.user = true;
      this.check = false
    }
  }
  public async delete() {
    if (this.author === this.jwt.getuser()) {
      this.article.deletearticle(this.slug);
      this.router.navigateByUrl('');
    } else {
      alert('ban khong co quyen');
      this.router.navigateByUrl('');
    }
  }
  public async favoritearticle() {
    // console.log(this.slug);

    await this.article.favorite(this.slug);
    this.favorited = !this.favorited;
    this.favoriteCount = this.favoriteCount + 1;
    // console.log(this.favorite);
    return this.favoriteCount;

  }
  public async unfavorite() {
    await this.article.unfavorite(this.slug);
    this.favorited = !this.favorited;
    this.favoriteCount = this.favoriteCount - 1;
    // console.log(this.favoriteCount);

  }
  postcm() {
    console.log('ok', this.newCommand);
  }
  edit() {
    this.router.navigateByUrl('newarticle');
    localStorage.setItem('slug', this.slug);

  }
  editprofile(){
    this.router.navigateByUrl('seting');
  }


}
