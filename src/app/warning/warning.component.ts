import {Component} from '@angular/core'
@Component({
  selector: 'app-warning',
  templateUrl:'./warning.component.html'
})
export class WarningComponent implements ngOnInit {

serverName='';
serverStatus="Server not created";
  constructor(){

  }

  ngOnInit(){

  }

  addServer(){
     this.serverStatus="Server with name " + this.serverName + " created";
  }

}