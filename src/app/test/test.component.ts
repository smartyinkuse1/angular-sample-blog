import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  title: string = 'Hello world';
  displayValue: number = 10
  imageUrl = "https://images.unsplash.com/photo-1562771379-eafdca7a02f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNwb3J0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
  imageAlt = "Fitness"
  buttonState: boolean = false
  counter = 0
  inputValue = ''
  constructor() { }

  ngOnInit(): void {
  }

  onHeadingClick() {
    this.counter++
    this.title = `Welcome to my Test component You have clicked ${this.counter} times`
  }

  onInputKeyUp(event: any) {
    console.log(event);
    this.inputValue = event.target.value

  }

  // Generate a new component (exercises), declare a number variable,  design a button
  // Whenever the button is being clicked the number variable shoud be squared
  // Display the number variable in an input field


  // I have an input and a button, and i have a class variable/property (number) which is displayed in the input,
  // another class variable (string)
  // Whenever the button is being clicked i want to multiply the number by 5
  // If the number is greater than 150, i want the button disabled and a message saying, "You've reached the limits"



}
