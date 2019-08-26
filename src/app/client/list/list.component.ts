import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Article } from 'src/app/shared/article.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private dataService: DataStorageService ) { }

  articles: Observable<Article[]>;

  ngOnInit() {
    this.articles = this.dataService.getDatabaseArticles();
  }

}
