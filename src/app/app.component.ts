import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang';
  active=[true,false,false,false];
  header=[
    {name:"Home", route:"/", active:true},
    {name:"Part 1", route:"/bind", active:false},
    {name:"Part 2", route:"/dir", active:false},
    {name:"Part 3", route:"/par", active:false},];
  
constructor(private myService:ApiService)
{

}
ngOnInit()
{
  this.myService.customObForHeaderRoute().subscribe((recievedCount)=>console.log(recievedCount));
}
  changeActive(i:number)
  {
    
    for(let j=0;j<this.header.length;j++)
    {
    this.header[j].active=false;
    // document.getElementById(this.header[j].id).style.backgroundColor = 'orange' ;
    }
    this.header[i].active=true;
    // document.getElementById(this.header[i].id).style.backgroundColor = 'blue' ;
  }


}
