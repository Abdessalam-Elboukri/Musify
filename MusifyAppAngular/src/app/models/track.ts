import {FileHandler} from "../interfaces/file-handler";


export class Track{
  id:number;
  trackName:string;
  trackReference:string;
  trackUrl:string;
  trackAvatar:string;
  createAt:Date;
  albumRef:string;

  trackFile:FileHandler;
  trackImage:FileHandler
}
