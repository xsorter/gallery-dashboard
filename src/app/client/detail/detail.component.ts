import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Article } from 'src/app/shared/article.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataStorageService) { }

  article: Article;

  ngOnInit() {
    this.route.params.subscribe(
      (data) => {
        this.article = this.dataService.getArticle(data.id)
      }
    )
  }

}
