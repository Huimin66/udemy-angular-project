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
  username :string = ''
  //directives
  serverCreated:boolean = false
  servers = ['Testserver', 'Testserver-2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
      console.log("allowNewServer",this.allowNewServer)
    }, 2000)
  }

  ngOnInit(): void {}

  onCreateServer(){
    this.servers.push(this.serverName)
    this.serverCreated = true
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
