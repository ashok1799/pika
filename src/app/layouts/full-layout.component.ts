import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AllBaseimage } from './admin';
import { allimage } from './image';
import { UniversityDetails } from './university';
import { NgClass } from '@angular/common';

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
  public theme: any;

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

  getStyle1() {
    //console.log('footer length', this.jobResponse.length)
    if(this.AllBaseimage.theme == 0 ) {
      return "#e8eff6";
    }
    else if(this.AllBaseimage.theme == 1 ) {
      return "#00aed9";
    }
    else if(this.AllBaseimage.theme == 2 ) {
      return "#f8f6ef";
    }
    else if(this.AllBaseimage.theme == 3 ) {
      return "#e8f7f3";
    }
    else if(this.AllBaseimage.theme == 4 ) {
      return "#fff2f2";
    }
    else if(this.AllBaseimage.theme == 5 ) {
      return "#e8faff";
    }
  }

  getStyle() {
    //console.log('footer length', this.jobResponse.length)
    if(this.AllBaseimage.theme == 0 ) {
      return "#3d454e";
    }
    else if(this.AllBaseimage.theme == 1 ) {
      return "#3f3e3d";
    }
    else if(this.AllBaseimage.theme == 2 ) {
      return "#393c3b";
    }
    else if(this.AllBaseimage.theme == 3 ) {
      return "#22b089";
    }
    else if(this.AllBaseimage.theme == 4 ) {
      return "#d63b49";
    }
    else if(this.AllBaseimage.theme == 5 ) {
      return "#04a9d8";
    }
  }

  getStyle2(value) {
    
    if(this.AllBaseimage.theme == 0 ) {
          let styles = {
            'color':  'white',
            'background': '#272d33',
          };
          return styles;
        }
        else if(this.AllBaseimage.theme == 1 ) {
          let styles = {
            'color':  'white',
            'background': '#474039',
          };
          return styles;
        }
        else if(this.AllBaseimage.theme == 2 ) {
            console.log(value);
            let styles = {
              'color':  'white',
              'background': '#2a2827',
              // 'background': '#EB8A61',
              
            };
            return styles;
        }
        else if(this.AllBaseimage.theme == 3 ) {
          let styles = {
            'color':  'white',
            'background': '#57ED57',
          };
          return styles;
        }
        else if(this.AllBaseimage.theme == 4 ) {
          let styles = {
            'color':  'white',
            'background': '#d63b49',
          };
          return styles;
        }
        else if(this.AllBaseimage.theme == 5 ) {
          let styles = {
            'color':  'white',
            'background': '#04a9d8',
          };
          return styles;
        }
  }
  mouseEnter(){
    
    if(this.AllBaseimage.theme == 2 ) {
      console.log('mouseenter');
      this.mouseover_getStyle1();
    }
  }
mouseover_getStyle1(){
  let styles = {
    'color':  'white',
    'background': 'red !important',
  };
  console.log(styles);
  return styles;
  }    



  //theme selection function

  themechagne(theme){
    if (theme == 'theme1'){
      this.http.get("../assets/imgaeload_1.json")
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
    else if (theme == 'theme2'){
      this.http.get("../assets/imgaeload_2.json")
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
    else if (theme == 'theme3'){
      this.http.get("../assets/imgaeload_3.json")
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
    else if (theme == 'theme4'){
      this.http.get("../assets/imgaeload_4.json")
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
    else if (theme == 'theme5'){
      this.http.get("../assets/imgaeload_5.json")
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
    
  }
    
}
