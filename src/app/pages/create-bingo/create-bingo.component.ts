import { BingoService } from './../../services/bingo.service';
import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-bingo',
  templateUrl: './create-bingo.component.html',
  styleUrls: ['./create-bingo.component.scss']
})
export class CreateBingoComponent implements AfterViewInit {

  @ViewChild('canvas') canvas;
  @ViewChild('downloadLink') downloadLink;

  constructor(private bingoService: BingoService) { }

  ngAfterViewInit(): void {
    this.bingoService.imgDownloadData.canvas = this.canvas;
    this.bingoService.imgDownloadData.downloadLink = this.downloadLink;
  }

  public downloadBingo(): void {
    this.bingoService.downloadImage();
  }

}
