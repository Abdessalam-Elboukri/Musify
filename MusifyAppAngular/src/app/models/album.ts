import {FileHandler} from "../interfaces/file-handler";
import {Track} from "./track";
import {Artist} from "./artist";

export class Album {
  id:number;
  albumName:string;
  albumRefrence:string;
  albumAvatar:string;
  is_private:boolean;
  artist:Artist;
  albumImage:FileHandler;
  tracks:Track[];

  constructor() {
    this.albumName="";
  }
}
