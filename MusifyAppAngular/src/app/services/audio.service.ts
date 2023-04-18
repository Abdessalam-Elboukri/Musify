import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import * as moment from "moment";
import { StreamState } from '../interfaces/stream-state';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private state: StreamState = {
    playing: false,
    readableCurrentTime: '',
    readableDuration: '',
    duration: undefined,
    currentTime: undefined,
    volume: 2,
    canplay: false,
    error: false,
    pausedAt:undefined
  };
  private stop$ = new Subject();
  private audioObj = new Audio();
  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];
  private stateChange: BehaviorSubject<StreamState> = new BehaviorSubject(
    this.state
  );

  constructor() {
  }

  private updateStateEvents(event: Event): void {
    switch (event.type) {
      case "canplay":
        this.state.duration = this.audioObj.duration;
        this.state.readableDuration = this.formatTime(this.state.duration);
        this.state.canplay = true;
        break;
      case "playing":
        this.state.playing = true;
        break;
      case "pause":
        this.state.playing = false;
        //this.state.pausedAt=this.audioObj.currentTime
        break;
      case "timeupdate":
        this.state.currentTime = this.audioObj.currentTime;
        this.state.readableCurrentTime = this.formatTime(
          this.state.currentTime
        );
        break;
      case "error":
        this.resetState();
        this.state.error = true;
        break;
    }
    this.stateChange.next(this.state);
  }

  private resetState() {
    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: undefined,
      currentTime: undefined,
      volume: 2,
      canplay: false,
      error: false,
      pausedAt:undefined
    };
  }

  getState(): Observable<StreamState> {
    return this.stateChange.asObservable();
  }

  private streamObservable(url: string) {
    return new Observable(observer => {
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play()

      const handler = (event: Event) => {
        this.updateStateEvents(event);
        observer.next(event);
      };

      this.addEvents(this.audioObj, this.audioEvents, handler);
      return () => {
        // Stop Playing
        this.audioObj.pause();
        this.audioObj.currentTime = 0
        // remove event listeners
        this.removeEvents(this.audioObj, this.audioEvents, handler);
        // reset state
        this.resetState();
      };
    });
  }

  private addEvents(obj: HTMLAudioElement, events: any[], handler: (event: Event) => void) {
    events.forEach(event => {
      obj.addEventListener(event, handler);
    });
  }

  private removeEvents(obj: HTMLAudioElement, events: any[], handler: (event: Event) => void) {
    events.forEach(event => {
      obj.removeEventListener(event, handler);
    });
  }

  playStream(url: any) {
    return this.streamObservable(url).pipe(takeUntil(this.stop$));
  }

  play() {
    if (this.state.pausedAt !== undefined) {
      this.audioObj.currentTime = this.state.pausedAt;
    }
    this.audioObj.play();
  }

  pause() {
    this.audioObj.pause();
  }

  stop() {
    this.stop$.next(this.state);
  }

  seekTo(seconds: number) {
    this.audioObj.currentTime = seconds;
  }

  setVolume(volume: number) {
    this.audioObj.volume = volume;
  }

  formatTime(time: number, format: string = "mm:ss") {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }






}
