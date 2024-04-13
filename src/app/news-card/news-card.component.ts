import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  @Input() news: any = []
  bookMarkedArticle: any[] = []
  isBookmarked: Boolean = false
  isBookmarkedPage: Boolean = false

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      if (data.title === 'Bookmark') {
        this.isBookmarkedPage = true
      }
    });
    const exsistingBookmark = JSON.parse(localStorage.getItem('myBookmark')) || []
    if(!exsistingBookmark.find(val => val?.title === this.news.title)) {
      this.isBookmarked = false
  } else {
      this.isBookmarked = true
  }
  }

  toggleBookMark(article): void {
    const exsistingBookmark = JSON.parse(localStorage.getItem('myBookmark')) || []
    const index = exsistingBookmark.findIndex(item => item?.title === article.title)
    if (index !== -1) {
        exsistingBookmark.splice(index, 1);
    } else {
        exsistingBookmark.push(article);
    }
    localStorage.setItem('myBookmark', JSON.stringify(exsistingBookmark))

    if(!exsistingBookmark.find(val => val?.title === article.title)) {
        this.isBookmarked = false
    } else {
        this.isBookmarked = true
    }
  }

  redirectToDeatil (data) {
    localStorage.setItem('deatilInfo', JSON.stringify(data))
    this.router.navigate(['/details', data.title])
  }

}
