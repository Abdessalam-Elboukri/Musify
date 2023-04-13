import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule } from '@angular/material/table'
import {BehaviorSubject, catchError, map, Observable, of, startWith } from 'rxjs';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { Page } from 'src/app/interfaces/page';
import { UserApp } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-infinite-scroll-pagi',
  templateUrl: './infinite-scroll-pagi.component.html',
  styleUrls: ['./infinite-scroll-pagi.component.css']
})
export class InfiniteScrollPagiComponent implements OnInit {


  usersState$: Observable<{ appData?: ApiResponse<Page<UserApp>> }>;
  responseSubject = new BehaviorSubject<ApiResponse<Page<UserApp>>>(null);
  private currentPageSubject = new BehaviorSubject<number>(0);
  currentPage$ = this.currentPageSubject.asObservable();
  page=0
  dataSource:any

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadData()
  }
  loadData(name?: string, page: number = 0) {
    this.usersState$ = this.userService.getUsers().pipe(
      map((response: ApiResponse<Page<UserApp>>) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(response.data.page.number);
        console.log(response);
        console.log("here")
        this.dataSource = response.data.page.content;
        return ({ appData: response });
      }),
      startWith({ }),
      catchError((error: HttpErrorResponse) =>{
        console.log("erooor")
        return of({  })}
      )
    )
    console.log(this.dataSource)
  }

  onScroll() {
    this.page++;
    this.loadData();
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


}
