import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss']
})
export class Exo1Component implements OnInit {
  monChrono : number;
  increment : any;

  constructor() { }

  ngOnInit(): void {
    this.monChrono = 0;  
   this.increment;
  }

  start(){      
    this.increment = setInterval(() => {this.monChrono++},1000);;
  }

  stop(){
    clearInterval(this.increment);
    this.increment = null;
  }

  reset(){
    this.stop();
    this.monChrono = 0;
  }

 


}
