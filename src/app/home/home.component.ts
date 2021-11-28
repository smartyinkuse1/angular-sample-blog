import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
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
    let sampleObs = of(1)
    sampleObs.subscribe(value => {
      console.log("Subscribe", value);

    })

    this.blogService.getPosts().subscribe((value:any) => {
      console.log("Api response",value);
      this.posts = value.data
      this.latestPosts = this.posts.slice(0,3)
    })

  }

  receiveHeaderSearch(value: string) {
    this.searchValue = value;
  }

}
