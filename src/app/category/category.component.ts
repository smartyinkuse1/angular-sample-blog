import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  // route: ActivatedRoute - BTS
  //Injection - bringing in some other classes into our component(class)
  categoryName: string | null = '' // Or
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(param => {
        if(param.has('categoryName')) {
          this.categoryName = param.get('categoryName')
        }
        console.log(this.categoryName);
      })
      // Takes the pathName we passed to the router
  }

}
