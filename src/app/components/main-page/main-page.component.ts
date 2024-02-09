import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/list';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
 
  text:string = '';
  descriptions:List[] = [];
  
  constructor() { }

  ngOnInit(): void {    
  }

  createList(text:string):void {    
    let value = this.descriptions.find(item => item.description === text.toUpperCase());
    if(text !== "") {
      if(value?.description !== text.toUpperCase() ) {
        this.descriptions.push({
          description: text.toUpperCase()
        });
        this.text = "";
        
      }
      else {
        alert("This description already exists!");
        this.text = "";        
      }      
    }
    else {
      alert("Enter a description to continue!");
      this.text = "";
    }    
  }

  removeOne(value:List) {
    if(confirm("Do you want to delete the selected item?")) {
      this.text = "";
      this.descriptions = this.descriptions.filter(item => item !== value);
    }    
  }

  removeAll() {
    if(confirm("Do you want to delete all items in the list?")) {
      this.text = "";
      this.descriptions = [];
    }    
  }
}