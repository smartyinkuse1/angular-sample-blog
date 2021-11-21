import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, DoCheck {
  numberValue: number = 50;
  inputValue: string = '';
  childState: boolean = true
  constructor() { }

  ngOnInit(): void {
    console.log("I'm in OnInit Method");
    this.inputValue = 'hello world'
    console.log(this.inputValue);
    // Allows us to make database calls (GET)
    // some results []
    // added to class property
  }
  ngDoCheck() {
    console.log("DoCheck is run");
  }

  receiveChildValue(value: string) {
    console.log("Emitted", value);

  }

  onButtonToggler() {
    this.childState = !this.childState;
  }
  // Generate two components named microsoft and linkedin
  // Create a parent-child relationship (Microsoft as parent and LinkedIn as child)
  // In microsft component, declare a string variable 'You"re doing so well' - you can have dummy view contents
  // in LinkedIn recieve a comment data from Microsoft. and display to the view

}
