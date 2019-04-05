import {Component} from '@angular/core'
@Component({
  selector: 'app-warning',
  templateUrl:'./warning.component.html'
})
export class WarningComponent implements ngOnInit {

serverName='';
serverStatus="Server not created";
serverStat='';
arr=['test','test2'];
  constructor(){
         this.serverStat=Math.random()>0.5?'online':'offline';
  }

  ngOnInit(){

  }

  addServer(){
     this.serverStatus="Server with name " + this.serverName + " created";
     this.arr.push(this.serverName);
     console.log(this.arr);
  }

}