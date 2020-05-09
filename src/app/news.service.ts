import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient,) { }
  getData=()=>{
    return this.http.get(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=am0JJ0PFSMP42crT9zngJ7unUuD0znSp`);
  }
}
