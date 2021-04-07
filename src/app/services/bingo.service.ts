import { Injectable, ElementRef } from '@angular/core';
import html2canvas from 'html2canvas';


interface IImageDownloadData {
  bingo?: ElementRef;
  canvas?: ElementRef;
  downloadLink?: ElementRef;
}

@Injectable({
  providedIn: 'root'
})
export class BingoService {

  public imgDownloadData: IImageDownloadData = {};

  public downloadImage(): void {
    html2canvas(this.imgDownloadData.bingo.nativeElement).then((canvas) => {
      this.imgDownloadData.canvas.nativeElement.src = canvas.toDataURL();
      this.imgDownloadData.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.imgDownloadData.downloadLink.nativeElement.download = 'bingo.png';
      this.imgDownloadData.downloadLink.nativeElement.click();
      this.imgDownloadData.canvas.nativeElement.src = '';
    });
  }

}
