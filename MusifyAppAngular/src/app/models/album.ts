import {FileHandler} from "../interfaces/file-handler";

export class Album {
  id:number;
  albumName:string;
  albumRefrence:string;
  albumAvatar:FileHandler;
  is_private:boolean;

  constructor() {
    this.albumName="";
  }
}
