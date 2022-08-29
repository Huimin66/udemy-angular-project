import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.scss'],
  styles:[`
    .greaterthanfive{
      color:white
    }
  `]
})
export class Exercise3Component implements OnInit {
  ifParaShowed:boolean = true
  clickTimes = 0
  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay(){
    this.clickTimes++
    this.ifParaShowed = !this.ifParaShowed
  }

  getColor(){
    return this.clickTimes>=5? 'blue' :'white'
  }
}
