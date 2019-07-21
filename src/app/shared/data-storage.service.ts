import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable()
export class DataStorageService {
  public articles: Article[] = [
    new Article('Title-1', 'Some description-1', 'https://images.unsplash.com/photo-1563714272638-882a6309ba7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'),
    new Article('Title-2', 'Some description-2', 'https://images.unsplash.com/photo-1563573475337-918ce3ee6fc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'),
    new Article('Title-3', 'Some description-3', 'https://images.unsplash.com/photo-1563441846967-d5c0d86b20a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80'),
  ]

  constructor(){}

  getData(){
    return this.articles
  }
}