import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  // route: ActivatedRoute - BTS
  //Injection - bringing in some other classes into our component(class)
  categoryName: string | null = '' // Or
  categories: string[] = ['music', 'fashion', 'sport', 'news'];
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(param => {
        if(param.has('categoryName')) {
          this.categoryName = param.get('categoryName');
        }
        console.log(this.categoryName);
        const found = this.categories.find(element => element === this.categoryName);
        if(!found) {
          this.router.navigate(['/home']);
        }
      })
      // Takes the pathName we passed to the router
  }

}
