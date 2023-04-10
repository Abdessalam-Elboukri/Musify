import { Injectable } from '@angular/core';
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CloudService {
  files: any = [
    {
      trackUrl:"https://www.naijafinix.com.ng/wp-content/uploads/2020/07/Martin-Garrix-Dua-Lipa-Scared-To-Be-Lonely-via-Naijafinix.com_.mp3",
      name: "Be Lonely",
      artist: "Martin Garrix"
    },
    {
      trackUrl:"https://www.thinknews.com.ng/wp-content/uploads/2020/10/David_Guetta_ft_Sia_-_Titanium.mp3",
      name:"Titanium",
      artist: "David Guetta",
    },
    {
      trackUrl:"https://www.thinknews.com.ng/wp-content/uploads/2021/08/Sia_-_Unstoppable_(thinknews.com.ng).mp3",
      name: "Unstoppable",
      artist: "Sia"
    },
    {
      trackUrl:"https://www.thinknews.com.ng/wp-content/uploads/2021/10/Adele_-_Easy_On_Me_(thinknews.com.ng).mp3",
      name: "Easy On Me",
      artist: "Alan Walker"
    },
    {
      trackUrl:"https://www.thinknews.com.ng/wp-content/uploads/2022/11/Alan_Walker_K-391_Tungevaag_Mangoo_-_PLAY_(thinknews.com.ng).mp3",
      name: "PLAY",
      artist: "Alan Walker"
    },
    {
      trackUrl:"https://thinknews.com.ng/wp-content/uploads/2022/04/Adele_Hello_(thinkNews.com.ng).mp3",
      name: "Adele Hello",
      artist: "Adele"
    }
  ];

  constructor() { }

  getFiles() {
    return of(this.files);
  }
}
