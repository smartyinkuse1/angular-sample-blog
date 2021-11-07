import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {
  @Input() displayValueFromParent: number = 0
  numberValue: number = 2
  someString: string = '';
  buttonState: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  onSquare() {
    this.numberValue = this.numberValue * this.numberValue
    //Math.pow(this.numberValue,2)
  }

  onMultiply() {
    console.log(this.numberValue)
    this.numberValue = this.numberValue * 5
    if(this.numberValue > 150) {
      this.buttonState = true
      this.someString = 'You"ve resched the limit';
    }
  }
}
