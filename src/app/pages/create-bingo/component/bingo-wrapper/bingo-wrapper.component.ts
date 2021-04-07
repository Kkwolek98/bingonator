import { BingoService } from './../../../../services/bingo.service';
import { Component, AfterViewInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-bingo-wrapper',
  templateUrl: './bingo-wrapper.component.html',
  styleUrls: ['./bingo-wrapper.component.scss']
})
export class BingoWrapperComponent implements AfterViewInit {

  @ViewChild('bingo') bingo;

  constructor(private bingoService: BingoService) { }

  ngAfterViewInit(): void {
    this.bingoService.imgDownloadData.bingo = this.bingo;
  }

}
