export class Article {
  public title: string;
  public description: string;
  public coverPath: string;

  constructor(title: string, description: string, coverPath: string){
    this.title = title;
    this.description = description;
    this.coverPath = coverPath;
  }
}