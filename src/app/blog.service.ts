import { Injectable } from '@angular/core';
import { Post } from './blog-create/blog-create.model';
import { posts } from './data/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts = posts
  constructor() { }

  getPosts() {
    // return this.http.get()
    return this.posts;
  }

  getlatestPosts() {
    return this.posts.slice(0,3)
  }

  getSinglePost(id: any) {
    return this.posts.find(post => post.id ==  id);
  }
  addPost(value: Post) {
    posts.unshift(value)
    this.posts = posts;
  }
}
