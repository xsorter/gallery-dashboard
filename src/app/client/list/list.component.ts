import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/firestore';
import { Article } from 'src/app/shared/article.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private dataService: DataStorageService ) { }

  articles: Article[] = this.dataService.getData();

  ngOnInit() {
    this.dataService.getDatabaseArticles()
      .subscribe(res => {
        this.articles = res 
      })
  }

}
