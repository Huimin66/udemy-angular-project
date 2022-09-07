import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() handleInterval = new EventEmitter<number>()
  timer: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000);
  count:number = 0

  constructor() { }

  ngOnInit(): void {
  }

  onStart(){
    this.timer = setInterval(()=>{
        this.handleInterval.emit(this.count+1)
        this.count++
        console.log(this.count)
    },1000)
  }

  onStop(){
    clearInterval(this.timer)
  }
}
