import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  blogId!: any;
  blogPost: any;
  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      if (param.has('id')) {
        this.blogId = param.get('id');
        console.log(this.blogId);
        this.blogService.getSinglePost(this.blogId).subscribe((value: any)=> {
          console.log(value);
          this.blogPost = value.data
        })
      }
    })
  }

}
