import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Suranjan Achary';
  getName(){
    return this.name;
  }

  obj = {
    name:"raj",
    age: 25,
    gender : "male"
  }

  arr = ["ram", "shyam","hari","krishna"];

  myEvent(event)
  {
    console.log(event)
  }
}
