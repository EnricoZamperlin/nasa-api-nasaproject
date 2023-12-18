import { Injectable } from '@angular/core';
import { PictureModel } from './modules/PictureModel';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PictureDataService {

  public async getData(): Promise<PictureModel>{
    let picture: PictureModel
    let api = await axios.get("https://api.nasa.gov/planetary/apod?api_key=WR6jKrmVSSBhYqRHGC7bFufCxYUWDWMYDX5JfAUb")

    console.log(api.data)
    picture = new PictureModel(
      api.data.title,
      api.data.date,
      api.data.explanation,
      api.data.url
    )
    return picture
  }


  constructor() {}
}
