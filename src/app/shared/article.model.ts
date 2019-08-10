export class Article {
  public title: string;
  public description: string;
  public coverPath ?: Array<string>;

  constructor(title: string, description: string, coverPath: Array<string>){
    this.title = title;
    this.description = description;
    this.coverPath = coverPath;
  }
}