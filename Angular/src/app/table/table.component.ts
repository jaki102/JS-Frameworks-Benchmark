import * as _ from "lodash";
import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";
import { Item } from "../item";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  posts: Item[] = [];
  backupPosts: Item[];

  constructor(private apiService: ConfigService) {}

  ngOnInit() {
    this.apiService.getData().subscribe(res => {
      this.backupPosts = res;
    });
  }

  add100Rows() {
    this.posts = [];
    // this.posts = this.backupPosts;
    for (let i = 1; i <= 100; i++) {
      this.apiService.getDataOne().subscribe(res => {
        this.posts.push(res);
      });
    }
  }

  add1000Rows() {
    this.posts = [];
    for (let i = 1; i <= 1000; i++) {
      this.apiService.getDataOne().subscribe(res => {
        this.posts.push(res);
      });
    }
  }

  clearRows() {
    while (this.posts.length > 0) {
      this.posts.pop();
    }
  }

  updateEveryRow() {
    // this.posts.map(post => {
    //   post.title += "!!!";
    //   post.body += "!!!";
    // });
    for (let i = 0; i < this.posts.length; i++) {
      this.apiService.getDataOne().subscribe(res => {
        this.posts[i].title = res.title;
        this.posts[i].body = res.body;
      });
    }
  }

  swapRows() {
    // this.posts = _.shuffle(this.posts);
    if (this.posts.length >= 16) {
      var depotTitle = this.posts[1].title;
      var depotBody = this.posts[1].body;
      this.posts[1].title = this.posts[15].title;
      this.posts[1].body = this.posts[15].body;
      this.posts[15].title = depotTitle;
      this.posts[15].body = depotBody;
    }
  }
}
