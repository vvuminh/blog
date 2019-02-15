import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../share/services/article.service';

@Component({
  selector: 'app-difprofile',
  templateUrl: './difprofile.component.html',
  styleUrls: ['./difprofile.component.css']
})
export class DifprofileComponent implements OnInit {
  lists : any;
  author = localStorage.getItem('author');

  constructor(private article : ArticleService) { }

  ngOnInit() {
    this.myarticlelist();
  }
  public async myarticlelist() {
    this.lists = await this.article.getmyarticlelist(this.author);
    return this.lists;
  }
  follow(){
    console.log('ok');
    
  }

}
