import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AllBaseimage } from './admin';
import { allimage } from './image';
import { UniversityDetails } from './university'

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  public disabled: boolean = false;
  public status: {isopen: boolean} = {isopen: false};

  public data: any;
  public AllBaseimage: AllBaseimage;
  public universityall: any;

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  constructor(private http: Http){
    this.loadNavItems();
    this.UniversityItems();
    this.AllBaseimage = new AllBaseimage();
    console.log('construcor', this.AllBaseimage)
  }

  loadNavItems() {
    this.http.get("../assets/imgaeload.json")
    .map(res => res.json())
    .subscribe(
      data => {
        this.data = data;
        this.AllBaseimage = this.data;
        console.log('data before', this.data)
        console.log('AllBaseimage', this.AllBaseimage)
      },
      error => alert(error),
      () => console.log("finished")
   );      
}

UniversityItems() {
  this.http.get("../assets/university.json")
  .map(res => res.json())
  .subscribe(
    data => {
      this.universityall = data.university;
      console.log('data before', this.universityall)
    },
    error => alert(error),
    () => console.log("finished")
 );      
}

onMouseOver(image, index, name){
  console.log('hover', image);
  console.log('index', index);
  var baseimage = this.AllBaseimage;
  var hover = baseimage.data.filter(data=> data.baseimage == image )
  console.log('all path', hover)
  this.AllBaseimage.data[index].baseimage = hover[0].hoverimage;
  this.AllBaseimage.data[index].hoverimage = image;
  console.log('after hoverimage', this.data.data[index].baseimage);
}

onMouseOut(image, index, name){
  console.log('hover-out', image);
  console.log('index', index);
  var baseimage = this.AllBaseimage;
  console.log('mouseout data', this.data)
  var hover = baseimage.data.filter(data=> data.baseimage == image )
  console.log('all path mouse out', hover)
  this.AllBaseimage.data[index].baseimage = hover[0].hoverimage;
  this.AllBaseimage.data[index].hoverimage = image;
}

  ngOnInit(): void {}

  myaccount(){
    alert('hi');
  }

  signout(){
    alert('hi');
  }
}
