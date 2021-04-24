import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  childToParent='golu';
  constructor() { }
  @Output() newItemEvent = new EventEmitter<string>();
  ngOnInit() {
  }

  @Input() item: string; // decorate the property with @Input()
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  
}
