import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  secretePass = false;
  log:number[] =[];
  
  onToggleDetails(){
    this.secretePass = !this.secretePass;
    this.log.push(this.log.length + 1);
    // console.log(this.log.length + 1);
  }

}
