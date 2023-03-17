import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  serverId: number= 10;
  serverStatus: string ='online';
  allowNewServer = false;
  serverCreationStatus= "No server created";
  serverName = 'TestServer';

  constructor(){
    setTimeout(()=>{
      this.allowNewServer= true;
    },5000);
  }

    onCreateServer(){
      this.serverCreationStatus= "Server Created Successfuly with name "+ this.serverName;
      
    }

    // onUpdateServerName(event:Event){
    //   this.serverName=(<HTMLInputElement>event.target).value;
    // }
}
