import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable()
export class DataStorageService {
  public articles: Article[] = [
    new Article('Title-1', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.', 'https://images.unsplash.com/photo-1563714272638-882a6309ba7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'),
    new Article('Title-2', 'Some description-2', 'https://images.unsplash.com/photo-1563573475337-918ce3ee6fc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'),
    new Article('Title-3', 'Some description-3', 'https://images.unsplash.com/photo-1563441846967-d5c0d86b20a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80'),
  ]

  constructor(){}

  getData(){
    return this.articles.slice()
  }

  getArticle(index: number){
    return this.articles[index]
  }
}