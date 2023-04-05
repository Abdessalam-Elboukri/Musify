import {FileHandler} from "../interfaces/file-handler";


export class Track{
  id:number;
  trackName:string;
  trackReference:string;
  trackUrl:FileHandler;
  trackAvatar:string;
  createAt:Date;
}
