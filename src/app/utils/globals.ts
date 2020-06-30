import { Observable } from 'rxjs';

export class Globals {
  //web: localhost
  //android: 10.0.2.2
  static apiURL = 'http://localhost:8080/collective-backend/api';

    
  resizeImage(src: string) {  
    `
    this.ng2ImgMax.resizeImage(imgFile, 10000, 400).subscribe
      (
        result => {
        this.resizedImg = result;
      },
      error => {
        console.log('😢 Oh no!', error);
      }
    );
    `
  }
}
