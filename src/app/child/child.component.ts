import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
  @Input() value!: string;
  @Output() sendValue: EventEmitter<string> = new EventEmitter<string>();
  stringValue: string = 'Olayinka Famutimi';
  constructor() { }

  ngOnInit(): void {
    console.log("I am entering the child Component");
  }

  ngOnChanges() {
    console.log("onChanges is called");
  }

  headerClick() {
    this.sendValue.emit(this.stringValue);
  }
  ngOnDestroy() {
    console.log("I'm leaving the component");

  }
}

