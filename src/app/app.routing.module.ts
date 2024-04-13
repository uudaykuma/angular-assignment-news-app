import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'details/:id',
    component: DetailComponent,
    data: {
      title: 'detail'
    }
  },
  {
    path: 'bookmarks',
    component: BookmarksComponent,
    data: {
      title: 'Bookmark'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
