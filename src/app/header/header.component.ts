import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() buttonText!:string;
  @Output() sendEmitter: EventEmitter<string> = new EventEmitter(); // Step 1
  searchText: string = ''; //step 2 value to pass out to paent
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.buttonText);

  }

  // aboutClick() {
  //   console.log("About is clicked")
  //   this.router.navigate(['/about'])
  // }

  submitSearch() {
    console.log(this.searchText);
    this.sendEmitter.emit(this.searchText); // Emission of values
  }

}
// Exercise
// Create two components (fruit, orange) ng g c <name>
// Create a relationship between them -- Note add path (parent componenet) to routing
// in the child component(orange) design an input and a button,
// when the button is being clicked,
// Pass the input value (if and only if it has some value) to the fruit compnent and display it on the view
