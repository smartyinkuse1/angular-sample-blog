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
  //blogService
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    const formValue = new FormData(); // OOP instantiation.
    formValue.append("title", form.value.title);
    formValue.append("category", form.value.category);
    formValue.append("paragraph1", form.value.paragraph1);
    formValue.append("paragraph2", form.value.paragraph2);
    formValue.append("subImageTitle", form.value.subImageTitle);
    formValue.append("backgroundImage", this.backgroundFile)
    formValue.append("subImage", this.subFile)

    this.blogService.addPost(formValue).subscribe(value => {
      form.resetForm();
      console.log("Blog post added");
      alert("Blog post added")
    })
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
