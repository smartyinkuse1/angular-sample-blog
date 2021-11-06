import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {
  numberValue: number = 2;
  constructor() { }

  ngOnInit(): void {
  }

  onSquare() {
    this.numberValue = this.numberValue * this.numberValue
    //Math.pow(this.numberValue,2)
  }

}
