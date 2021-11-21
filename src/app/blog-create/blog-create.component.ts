import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss']
})
export class BlogCreateComponent implements OnInit {
  backgroundFile: File = {} as File;
  subFile: File = {} as File;
  imagePreview: any;
  subImagePreview: any;
  categories: string[] = ['music', 'fashion', 'news', 'sport'];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    const formValue = {
      id: uuidv4(),
      ...form.value,
      backgroundImage: this.imagePreview,
      subImage: this.subImagePreview,
      createdAt: new Date()
    }
    this.blogService.addPost(formValue)
    form.resetForm();
  }

  onFileClicked(event: any, field: string) {
    const reader = new FileReader();
    if (field === 'sub') {
      this.subFile = event.target?.files[0]
      reader.readAsDataURL(this.subFile)
      reader.onload = () => {
      this.subImagePreview = reader.result;
    }
    } else {
      this.backgroundFile = event.target?.files[0]
      reader.readAsDataURL(this.backgroundFile)
      reader.onload = () => {
        this.imagePreview = reader.result;
      }
    }
  }

}
