import { Component, OnInit } from '@angular/core';
import { posts } from '../data/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchText: string = 'Home Search';
  searchValue: string = '';
  posts = posts
  latestPosts: any[] = []
  constructor() { }

  ngOnInit(): void {
    this.latestPosts = this.posts.slice(0,3)
  }

  receiveHeaderSearch(value: string) {
    this.searchValue = value;
  }

}
