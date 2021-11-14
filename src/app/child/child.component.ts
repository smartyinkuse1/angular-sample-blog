import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() value!: string;
  @Output() sendValue: EventEmitter<string> = new EventEmitter<string>();
  stringValue: string = 'Olayinka Famutimi';
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log("onChanges is called");

  }

  headerClick() {
    this.sendValue.emit(this.stringValue);
  }
}

