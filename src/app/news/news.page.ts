import { Component, OnInit } from "@angular/core";
import { NewsService } from "../news.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-news",
  templateUrl: "./news.page.html",
  styleUrls: ["./news.page.scss"]
})
export class NewsPage implements OnInit {
  data: any;

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit() {
    this.newsService
      .getData("everything?q=bitcoin&from=2018-12-10&sortBy=publishedAt")
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }
}
