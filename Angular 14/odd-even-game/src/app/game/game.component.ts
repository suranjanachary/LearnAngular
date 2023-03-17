import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  @Output() intervalFired= new EventEmitter<number>();
  interval;
  lastNumber=0;

  onPressStart(){
    this.interval=setInterval(()=>{
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    },1000);
  }
  onPressPause(){

  }
}
