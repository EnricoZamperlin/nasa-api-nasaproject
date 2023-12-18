import { Component, OnInit } from '@angular/core';
import { PictureModel } from '../modules/PictureModel';
import { PictureDataService } from '../picture-data.service';

@Component({
  selector: 'app-pic',
  standalone: true,
  imports: [],
  templateUrl: './pic.component.html',
  styleUrl: './pic.component.css'
})

export class PicComponent implements OnInit {

  private pictureService: PictureDataService
  public dailyPicture?: PictureModel

  async showDatas(){
    this.dailyPicture =  await this.pictureService.getData()
  }

  ngOnInit() {
    this.showDatas();
  }

  constructor(pictureDataService: PictureDataService){
    this.pictureService = pictureDataService
  }
}
