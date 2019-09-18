import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Article } from 'src/app/shared/article.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.scss']
})
export class AdminArticlesComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  articles$: Observable<Article[]>;

  ngOnInit() {
    this.articles$ = this.dataStorageService.getDatabaseArticles();
  }

}
