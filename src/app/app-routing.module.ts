import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'category/:categoryName', component: CategoryComponent}, // /category/games category/kbhjsdbsijdv
  {path: 'test', component: TestComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'blog-post/:id', component: BlogPostComponent}, // /blog-post/1
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
