import {Component} from '@angular/core'
@Component({
  selector: 'app-success',
  templateUrl:'./success.component.html',
  styleUrls:['./success.component.css']
})
export class SuccessComponent {

count=0;
status=false;
arr=[];
  toggleMe(event){
  this.count=this.count+1;
  this.arr.push(this.count);
  console.log(this.arr);
  if(this.count%2!=0)
  {
    this.status=true;
  }
  else{
    this.status=false
  }
  }

  getColor(x){
    return x>=5?'blue':'white';
  }

}