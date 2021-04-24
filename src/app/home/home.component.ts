import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myservice:ApiService) { }

  ngOnInit() {
  }

  headings=[
    {label:"in-build directives", route:"/bind"},
    {label:"custom directives", route:"/dir"},
    {label:"input/output", route:"/par"},
  ]

  boomBam(data)
  {
console.log(data);
this.myservice.changeData(data);
  }

}
