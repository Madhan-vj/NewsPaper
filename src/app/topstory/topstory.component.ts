import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";
import { HttpClient, HttpParams } from "@angular/common/http";
import { news } from "./api";
@Component({
  selector: 'app-topstory',
  templateUrl: './topstory.component.html',
  styleUrls: ['./topstory.component.css']
})
export class TopstoryComponent implements OnInit {
  articles;
  results = [];
  constructor(private service: NewsService ,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.service.getData().subscribe((data: news)=>{
      this.articles = data.results;
      console.log(data.results);
      // console.log(data.results[0].multimedia[4].url);
    });
  }

}
