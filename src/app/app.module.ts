import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExercisesComponent } from './exercises/exercises.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { FirstPipe } from './first.pipe';
import { CommonModule } from '@angular/common';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ // All component available in the module
     AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent,
    ExercisesComponent,
    ParentComponent,
    ChildComponent,
    BlogPostComponent,
    FirstPipe,
    BlogCreateComponent,
  ],
  imports: [ // Shows us all the modules being used in our module
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
