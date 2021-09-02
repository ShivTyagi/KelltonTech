import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-tracker',
  templateUrl: './temp-tracker.component.html',
  styleUrls: ['./temp-tracker.component.scss']
})
export class TempTrackerComponent implements OnInit {
  temperaturArray : Array<any> = [];
  temperatur :Number;
  maxTemp : Number;
  minTemp : Number;
  minMean : Number;
  constructor() { }

  ngOnInit(): void {
  }

  insert(){
    if(this.temperatur <= 150 || this.temperatur >= 0){
      this.temperaturArray.push(this.temperatur);
      this.get_max();
      this.get_min();
      this.get_mean();
    }
    else{
      throw "invalid Temperature";
      
   }
    
  }

  get_max(){
    if(this.temperaturArray.length){
      this.maxTemp = Math.max(...this.temperaturArray);
    }
    else{
      throw "No Temperature Found";
    }
    
}

get_min(){
  if(this.temperaturArray.length){
   this.minTemp = Math.min(...this.temperaturArray);
   }
   else{
     throw "No Temperature Found";
   }
  
}

get_mean(){
  if(this.temperaturArray.length){
    this.minMean =  this.temperaturArray.reduce(( prev, curr ) =>  (prev + curr) / this.temperaturArray.length, 0);
  }
  else{
      throw "No Temperature Found";
    }
}

}
