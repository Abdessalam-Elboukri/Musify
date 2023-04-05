import {User} from "./user";
import {Album} from "./album";

export class Artist extends User{
  artistReference:string;
  artistCategory:string;
  isArtist:boolean;
  albums:Album[];

}
