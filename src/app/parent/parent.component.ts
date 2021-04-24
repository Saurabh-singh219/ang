import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  currentItem = 'Television';
  cameFromChild='';
  constructor() { }

  ngOnInit() {
  }

  addItem(newItem: string) {
    this.cameFromChild=newItem;
  }

}
