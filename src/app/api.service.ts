import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit, OnDestroy{

  public sharingData="";

  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get("http://jsonplaceholder.typicode.com/users");
  }
  getConfigResponse(): Observable<any> {
    return this.http.get("http://jsonplaceholder.typicode.com/users");
  }
  async getConfigResponsePromise(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos/1").toPromise();
  
}
async getConfigResponsePromise2(){
  return this.http.get("http://jsonplaceholder.typicode.com/users").toPromise();

}
changeData(data)
{
this.sharingData=data;
}
customObs(){
    return new Observable<String>(observer => {
        observer.next("2");
        observer.next(this.sharingData);
    });
  }
  customObForHeaderRoute(){
    return new Observable<String>(observer => {
        observer.next(this.sharingData);
    });
  }
  ngOnInit() {
    console.log('service:OnInit');
  }
 
  ngOnDestroy() {
    console.log('service:OnDestroy');
  }
  
}
