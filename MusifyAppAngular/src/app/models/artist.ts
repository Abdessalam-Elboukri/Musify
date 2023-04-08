import {UserApp} from "./user";
import {Album} from "./album";

export class Artist extends UserApp{
  artistReference:string;
  artistCategory:string;
  isArtist:boolean;
  albums:Album[];

}
