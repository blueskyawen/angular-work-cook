import { Component, OnInit, ElementRef, AfterViewInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fan-clock',
  templateUrl: './fan-clock.component.html',
  styleUrls: ['./fan-clock.component.less']
})
export class FanClockComponent implements OnInit {
  @ViewChild('myClock')
      clockRef: ElementRef;
  @ViewChild('hourPointer')
      hourPoterRef: ElementRef;
  @ViewChild('minuPointer')
      minutePoterRef: ElementRef;
  @ViewChild('secondPointer')
      secondPoterRef: ElementRef;

  timeInfo: any = {hour: 0, minute: 0, second: 0};
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.getCurTime();
    this.initTimeGo();
  }

  getCurTime() {
    let curTime = new Date();
    this.timeInfo.hour = curTime.getHours() % 12;
    this.timeInfo.minute = curTime.getMinutes();
    this.timeInfo.second = curTime.getSeconds();
    let hourDeg = this.timeInfo.hour * 30 + Math.round(this.timeInfo.minute / 2);
    let mutinueDeg = this.timeInfo.minute * 6;
    let secondDeg = this.timeInfo.second * 6;
    this.renderer.setStyle(this.hourPoterRef.nativeElement, "transform", `rotate(${hourDeg}deg)`);
    this.renderer.setStyle(this.minutePoterRef.nativeElement, "transform", `rotate(${mutinueDeg}deg)`);
    this.renderer.setStyle(this.secondPoterRef.nativeElement, "transform", `rotate(${secondDeg}deg)`);
  }

  initTimeGo() {
    setTimeout(() => {
      this.checkSecondGo();
    },1000);
  }

  checkSecondGo() {
    this.timeInfo.second++;
    if(this.timeInfo.second === 60) {
      this.timeInfo.second = 0;
      this.checkMinuteGo();
    }
    let secondDeg = this.timeInfo.second * 6;
    this.renderer.setStyle(this.secondPoterRef.nativeElement, "transform", `rotate(${secondDeg}deg)`);
    setTimeout(() => {
      this.checkSecondGo();
    },1000);
  }

  checkMinuteGo() {
    this.timeInfo.minute++;
    if(this.timeInfo.minute % 3 === 0) {
      if(this.timeInfo.minute === 60) {
        this.timeInfo.minute = 0;
        this.checkHourGo(60);
      } else {
        this.checkHourGo();
      }
    }
    let mutinueDeg = this.timeInfo.minute * 6;
    this.renderer.setStyle(this.minutePoterRef.nativeElement, "transform", `rotate(${mutinueDeg}deg)`);
  }

  checkHourGo(minutes ?: number) {
    if(minutes) {
      this.timeInfo.hour++;
    }
    if(this.timeInfo.hour === 12) {
      this.timeInfo.hour = 0;
    }
    let hourDeg = this.timeInfo.hour * 30 + Math.round(this.timeInfo.minute / 2);
    this.renderer.setStyle(this.hourPoterRef.nativeElement, "transform", `rotate(${hourDeg}deg)`);
  }
}
