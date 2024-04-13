import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarkedArticle: any[] = []
  constructor() { }

  ngOnInit(): void {
    this.bookmarkedArticle = JSON.parse(localStorage.getItem('myBookmark')) || []
  }

}
