import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { posts } from '../data/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchText: string = 'Home Search';
  searchValue: string = '';
  posts: any[] = [];
  latestPosts: any[] = [];
  // blogService: BlogService;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.posts = this.blogService.getPosts()
    this.latestPosts = this.blogService.getlatestPosts();
  }

  receiveHeaderSearch(value: string) {
    this.searchValue = value;
  }

}
