import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiKey: String = environment.api_keys
  constructor(private http: HttpClient) { }

  fetchData(pageSize, searchParams): Observable<any> {
    console.log(searchParams, 'searchParams')
    const { category, country} = searchParams
    if (!category || !country) {
      return this.http.get<any>(`https://newsapi.org/v2/everything?q=all&pageSize=${pageSize}&apiKey=${this.apiKey}`);

    } else {
      console.log('it has params')
      return this.http.get<any>(`https://newsapi.org/v2/${country ? "top-headlines" : category ? "top-headlines" : "everything"}?${country ? `country=${country}&` : ""}${category ? `category=${category}&` : ""}pageSize=${
        pageSize
      }&apiKey=${this.apiKey}`);

    }
  }
}