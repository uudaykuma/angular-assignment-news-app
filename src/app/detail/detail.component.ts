import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  article = null
  constructor() { }

  ngOnInit(): void {
    this.article = JSON.parse(localStorage.getItem('deatilInfo'))
    console.log(this.article)
  }

}
