import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  title = 'Angular 7'; 
  isavailable=true;
  binding;
   
  // declared array of months. 
  months = ["January", "February", "March", "April", "May", "June", "July", 
     "August", "September", "October", "November", "December"];

  constructor(private myservice:ApiService) { }

  
  

  ngOnInit() {

    this.myservice.changeData("golu");
  }

  eventb()
  {
    this.isavailable=!this.isavailable; 
  }

}
