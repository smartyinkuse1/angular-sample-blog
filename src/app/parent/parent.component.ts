import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, DoCheck {
  numberValue: number = 50;
  inputValue: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck() {
    console.log("DoCheck is run");

  }

  receiveChildValue(value: string) {
    console.log("Emitted", value);

  }

  // Generate two components named microsoft and linkedin
  // Create a parent-child relationship (Microsoft as parent and LinkedIn as child)
  // In microsft component, declare a string variable 'You"re doing so well' - you can have dummy view contents
  // in LinkedIn recieve a comment data from Microsoft. and display to the view

}
