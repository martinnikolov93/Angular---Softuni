import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private symbols: number = 250;
  @Input() article: Article;
  @Input() articleDesc: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = "Show Image";

  constructor() { 
    this.articleDescLen = 0;
    this.descToShow = "";
  }

  ngOnInit(): void {
  }

  readMore(): void {
    this.articleDescLen += this.symbols;


      this.showHideBtn = true;
      this.showReadMoreBtn = false;
      this.descToShow = this.articleDesc;

  }

  hideDesc(): void {
    this.descToShow = "";
    this.articleDescLen = 0;
    this.showReadMoreBtn = true;
    this.showHideBtn = false;
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageButtonTitle === "Show Image" ? "Hide Image" : "Show Image";
  }

}
