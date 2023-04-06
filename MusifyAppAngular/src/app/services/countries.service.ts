import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CountriesService{

  private readonly base_url = environment.BASE_URL;

  constructor(private http:HttpClient) {
  }

  getAllCountries():Observable<any>{
    return this.http.get<any>(`${this.base_url}/all-countries`)
}

}
