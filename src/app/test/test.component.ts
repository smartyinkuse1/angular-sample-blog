import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {
  title: string = '';
  displayValue: number = 10
  imageUrl = "https://images.unsplash.com/photo-1562771379-eafdca7a02f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNwb3J0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
  imageAlt = "Fitness"
  buttonState: boolean = false
  counter = 0
  inputValue = ''
  someString: string = 'WOW'
  currentDate: Date = new Date();
  numberValue: number = 2.34657;
  titleState:boolean = false;
  wordState: boolean = true;
  styleOne ='demo'
  styleTwo = 'big'
  fruits: string[] = ['Orange', 'Apple', 'Banana', 'PineApple', 'Pear', 'Avocado'];
  cars: any[] = [
    {
      name: "Toyota",
      year: 2019,
      mileage: 100,
      color: "red"
    },
    {
      name: "Benz",
      year: 2015,
      mileage: 120,
      color: "black"
    },
    {
      name: "Nissan",
      year: 2019,
      mileage: 100,
      color: "grey"
    },
    {
      name: "Honda",
      year: 2016,
      mileage: 90,
      color: "green"
    },
  ]
  propertyA: string = 'Hello World';
  propertyB: string = "Welcome here";
  btnState: boolean = true;
  imagePreview: any;
  file: File = {} as File;
  signupForm: FormGroup = {} as FormGroup;
  constructor() { }

  ngOnInit(): void {
    // You can query your database, backend (Get data) then assign the returned data to the class property
    console.log("Hello i'm in the onInint "); // Runs
    this.title = "Response from Backend";
    console.log(this.currentDate);
    this.signupForm = new FormGroup({
      email: new FormControl('ola@mail.com'), // input | control | formControl
      firstName: new FormControl('Olayinka'),
      lastName: new FormControl('Famutimi'),
      check: new FormControl(),
      password: new FormControl()
    })
  }

  onHeadingClick() {
    this.counter++
    this.title = `Welcome to my Test component You have clicked ${this.counter} times`
  }

  onInputKeyUp(event: any) {
    console.log(event);
    this.inputValue = event.target.value

  }

  ngOnDestroy() {
    console.log("Component is being closed");
  }

  titleToggler() {
    this.titleState = !this.titleState
  }
  changeButtonState() {
    this.btnState = !this.btnState
  }

  // Template approach has no initialized form in the component
  onSubmit(form: NgForm) {
    const formValue = {...form.value, file: this.file}
    console.log(formValue);

  }

  // Reactive approach has an initialized form
  onSignUp() {
    console.log(this.signupForm);

  }

  onFileClicked(event: any) {
    this.file = event.target?.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(this.file)
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
  }

  onSubmitLogin(form: NgForm) {
    console.log(form.value);
  }

  // Generate a new component (exercises), declare a number variable,  design a button
  // Whenever the button is being clicked the number variable shoud be squared
  // Display the number variable in an input field


  // I have an input and a button, and i have a class variable/property (number) which is displayed in the input,
  // another class variable (string)
  // Whenever the button is being clicked i want to multiply the number by 5
  // If the number is greater than 150, i want the button disabled and a message saying, "You've reached the limits"

  // generate a pipe that adds the sentence "You're welcome" to any string;
  // {{ word | pipe }} - Hello You're welcome


  // I have two class properties with values "Hello world" and "Welcome here",
  // i also have a button, Whenever the button is clicked,
  // i want to display or remove the hello world,
  // then toggle the color of Welcome here to blue and red

  // ng g c blog-create
}

