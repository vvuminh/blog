import { Component, OnInit } from '@angular/core';
//import { ArticleService } from '../../share/services/article.service';
import { ArticleService } from 'src/app/share/services/article.service';
import { ActivatedRoute } from '@angular/router';
import { UserService} from 'src/app/share/services/user.service'
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  lists: any;
  favorite: any;
  public check : boolean = true;
  user = localStorage.getItem('user');
  following: any;
  data: any;
  author: string;
  profileuser: any;

  constructor(private article: ArticleService, private route: ActivatedRoute, private usersr : UserService) { }

  ngOnInit() {
    this.abc();
    //console.log(this.following);
    this.getfollow();
    //this.follow();
  }

  public abc(){
    this.route.params.subscribe((params) => {
      this.author = params['id'];
       console.log(this.author);
    });
    if(this.author == null){
        this.profile(this.user);
        this.favoritelist(this.user)
    }else{
      this.myarticlelist();
      this.favoritelist(this.author)
    }
  }

  public async myarticlelist() {
    if(this.user == this.author){
      this.check = true;
    }else{
      this.check = false
    }
    this.lists = await this.article.getmyarticlelist(this.author);
    return this.lists;
  }
  public async profile(user){
    this.lists = await this.article.getmyarticlelist(this.user);
    return this.lists;
  }
  public async favoritelist(user){
    this.favorite = await this.article.favoritelist(user);
    return this.favorite;
  }
  public async getfollow(){
    this.profileuser = await this.usersr.profileuser(this.author);
    this.following = this.profileuser.profile.following;
   // console.log(this.profileuser);
    return this.following;
  }
  public async follow(){
    console.log(this.author);
    this.data = await this.usersr.followuser(this.author);
    console.log(this.data);
    return this.following = this.data.profile.following;
    console.log(this.following);
    console.log(this.data);
    
  }
  public async unfollow(){
    this.data = await this.usersr.unfollowuser(this.author);
    console.log(this.data);
    return this.following = this.data.profile.following;
  }
}
