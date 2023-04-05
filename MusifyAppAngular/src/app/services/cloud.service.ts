import { Injectable } from '@angular/core';
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CloudService {
  files: any = [
    // tslint:disable-next-line: max-line-length
    {
      url:"https://www.naijafinix.com.ng/wp-content/uploads/2020/07/Martin-Garrix-Dua-Lipa-Scared-To-Be-Lonely-via-Naijafinix.com_.mp3",
      name: "How to improve yourself",
      artist: "Martin Garrix"
    },
    {
      url:"https://www.thinknews.com.ng/wp-content/uploads/2020/10/David_Guetta_ft_Sia_-_Titanium.mp3",
      name:"You will be successfull. If you ask yourself 'Why'",
      artist: "David Guetta",
    },
    {
      url:"https://www.thinknews.com.ng/wp-content/uploads/2021/08/Sia_-_Unstoppable_(thinknews.com.ng).mp3",
      name: "Build your career as you think. Question youself 'How'",
      artist: "Sia"
    },
    {
      url:"https://www.thinknews.com.ng/wp-content/uploads/2021/10/Adele_-_Easy_On_Me_(thinknews.com.ng).mp3",
      name: "Build your career as you think. Question youself 'How'",
      artist: "Alan Walker"
    },
    {
      url:"https://www.thinknews.com.ng/wp-content/uploads/2022/11/Alan_Walker_K-391_Tungevaag_Mangoo_-_PLAY_(thinknews.com.ng).mp3",
      name: "Build your career as you think. Question youself 'How'",
      artist: "Alan Walker"
    },
    {
      url:"https://thinknews.com.ng/wp-content/uploads/2022/04/Adele_Hello_(thinkNews.com.ng).mp3",
      name: "Build your career as you think. Question youself 'How'",
      artist: "Adele"
    }
  ];

  constructor() { }

  getFiles() {
    return of(this.files);
  }
}
