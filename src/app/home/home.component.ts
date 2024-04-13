import { Component, HostListener, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {countries} from '../../assets/data/country'
import {categories} from '../../assets/data/category'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsArticle: any[] = []
  selectedCountryValue: String = ''
  selectedCategoryValue: String = ''
  category: any = categories
  country: any = countries
  pageSize: number = 5
  isLoading:boolean = false
  constructor(private dataService: DataService) {
   }


  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const documentHeight = document.body.scrollHeight
    const viewportHeight = window.innerHeight
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
    // console.log(`documentHeight:: ${documentHeight} :::: viewportHeight:: ${viewportHeight} ::: scrollPosition:: ${scrollPosition}`);
    if (documentHeight - viewportHeight - scrollPosition < 1) {
      console.log("Almost at the bottom of the page!");
      this.pageSize = this.pageSize + 5
      const payload = {
        category: this.selectedCategoryValue,
        country: this.selectedCountryValue
      }
      if(!this.isLoading) this.getNewsArticles(this.pageSize, payload)
    }
  }

  ngOnInit(): void {
    console.log(this.category, this.country)
    const payload = {
      category: this.selectedCategoryValue,
      country: this.selectedCountryValue
    }
    this.getNewsArticles(this.pageSize, payload)
  }

  getNewsArticles(size, params) {
    this.isLoading = true
    this.dataService.fetchData(size, params).subscribe(data => {
      console.log(data.articles);
      this.newsArticle = data.articles
    });
    this.isLoading = false
  }

  countryKeys() {
    return Object.keys(this.country);
  }
  categoryKeys() {
    return Object.keys(this.category)
  }

  onSelectcountry (): void {
    if(this.selectedCountryValue !== '') {
      // this.selectedCountryValue = this.selectedCountryValue
    }
  }

  onSelectCategory (): void {
    if(this.selectedCategoryValue !== '') {
      // this.selectedCategoryValue = this.selectedCategoryValue
      console.log(this.selectedCategoryValue)
    }
  }

  handleSearchArticle () {
    console.log(this.selectedCategoryValue, this.selectedCountryValue)
    const payload = {
      category: this.selectedCategoryValue,
      country: this.selectedCountryValue
    }
    this.getNewsArticles(this.pageSize, payload)
  }

}
