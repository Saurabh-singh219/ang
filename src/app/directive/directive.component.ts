import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiService} from '../api.service'

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  persondata: any[];
  divisible:Observable<{value:String}>

  constructor(private myservice:ApiService) { }

  ngOnInit() {
  //   this.myservice.getData().subscribe((data) => {
  //     console.log(data);
  // }
  this.myservice.getData().subscribe((data) => console.log(Array.from(Object.keys(data), k=>data[k])));

  this.myservice.getConfigResponse().subscribe((data)=>console.log(data));
  this.myservice.getConfigResponsePromise().then((data)=>console.log(data));
  this.myservice.getConfigResponsePromise2().then((data)=>console.log(data));

  
  // this.divisible=Observable.create((observer)=>
  // {
  //   observer.next({value:String})
  // });

  this.myservice.customObs().subscribe((recievedCount)=>console.log(recievedCount));

}
}
