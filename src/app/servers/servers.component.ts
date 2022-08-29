import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-servers",
  templateUrl:'./servers.component.html',
  styleUrls: ["./servers.component.scss"],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false
  serverCreationStatus='No server was created'
  serverName=''
  // exercise 2
  username = ''

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
      console.log("allowNewServer",this.allowNewServer)
    }, 2000)
  }

  ngOnInit(): void {}

  onCreateServer(){
    this.serverCreationStatus = 'Server was created, server name is: '+this.serverName
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }

  //exercise 2
  onClearUsername(){
    this.username=''
  }
}
