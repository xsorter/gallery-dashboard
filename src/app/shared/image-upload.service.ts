import { Injectable } from "@angular/core";

@Injectable()
export class ImageUploadService {
  imageUrls: string[] = [];

  addUrl(url: string) {
    this.imageUrls.push(url);
    console.log(this.imageUrls);
  }

  getUrls() {
    return this.imageUrls;
  }
}

