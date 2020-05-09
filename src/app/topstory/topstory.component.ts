import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-topstory',
  templateUrl: './topstory.component.html',
  styleUrls: ['./topstory.component.css']
})
export class TopstoryComponent implements OnInit {
  articles;
  constructor(private service: NewsService ,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.service.getData().subscribe((data)=>{
      this.articles = data.results;
      console.log(data.results);
      // console.log(data.results[0].multimedia[4].url);
    });
  }

}
