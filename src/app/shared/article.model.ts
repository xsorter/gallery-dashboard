export class Article {
  public title: string;
  public previewText: string;
  public description: string;
  public coverPath ?: Array<string>;


  constructor(title: string, previewText: string, description: string, coverPath: Array<string>){
    this.title = title;
    this.previewText = previewText;
    this.description = description;
    this.coverPath = coverPath;
  }
}