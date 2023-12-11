export class PictureModel
{
    title: string
    date: string
    explanation: string
    video: string

    constructor(title: string, date: string, explanation: string, video: string){
        this.title = title
        this.date = date
        this.explanation = explanation
        this.video = video
    }
}