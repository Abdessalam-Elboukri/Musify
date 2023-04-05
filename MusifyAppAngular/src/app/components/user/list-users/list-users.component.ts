import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {BehaviorSubject, catchError, map, Observable, of, startWith} from "rxjs";
import {ApiResponse} from "../../../interfaces/api-response";
import {Page} from "../../../interfaces/page";
import {HttpErrorResponse} from "@angular/common/http";
import {UserApp} from "../../../models/user";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  usersState$: Observable<{ appState: string, appData?: ApiResponse<Page<UserApp>>, error?: HttpErrorResponse }>;
  responseSubject = new BehaviorSubject<ApiResponse<Page<UserApp>>>(null);
  private currentPageSubject = new BehaviorSubject<number>(0);
  currentPage$ = this.currentPageSubject.asObservable();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.usersState$ = this.userService.getUsers().pipe(
      map((response: ApiResponse<Page<UserApp>>) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(response.data.page.number);
        console.log(response);
        return ({ appState: 'APP_LOADED', appData: response });
      }),
      startWith({ appState: 'APP_LOADING' }),
      catchError((error: HttpErrorResponse) =>{
        return of({ appState: 'APP_ERROR', error })}
      )
    )
  }



  gotToPage(name?: string, pageNumber: number = 0): void {
    this.usersState$ = this.userService.getUsers(name, pageNumber).pipe(
      map((response: ApiResponse<Page<UserApp>>) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(pageNumber);
        console.log(response);
        return ({ appState: 'APP_LOADED', appData: response });
      }),
      startWith({ appState: 'APP_LOADED', appData: this.responseSubject.value }),
      catchError((error: HttpErrorResponse) =>{
        return of({ appState: 'APP_ERROR', error })}
      )
    )
  }


  goToNextOrPreviousPage(direction?: string, name?: string): void {
    this.gotToPage(name, direction === 'forward' ? this.currentPageSubject.value + 1 : this.currentPageSubject.value - 1);
  }

}
