import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
