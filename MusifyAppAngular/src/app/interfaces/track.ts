import {FileHandler} from "./file-handler";

export class Track{
  id:number;
  trackName:string;
  trackReference:string;
  trackUrl:FileHandler;
  trackAvatar:string;
  createAt:Date;
}
