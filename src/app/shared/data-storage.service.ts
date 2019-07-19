import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable()
export class DataStorageService {
  public articles: Article[] = [
    new Article('Title-1', 'Some description-1', 'some image-1'),
    new Article('Title-2', 'Some description-2', 'some image-2'),
    new Article('Title-3', 'Some description-3', 'some image-3'),
  ]

  constructor(){}

  getData(){
    return this.articles
  }
}