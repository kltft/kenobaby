import { Component, OnInit, ViewChild } from '@angular/core';
import { NumberServiceService } from '../number-service.service'
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-keno-board',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0
      })),
      transition('closed => open', [
        animate('1s')
      ]),
      transition('open => closed', [
        animate('1s')
      ]),
    ]),
  ],
  templateUrl: './keno-board.component.html',
  styleUrls: ['./keno-board.component.css']
})

export class KenoBoardComponent implements OnInit {

  constructor(private numberSvc: NumberServiceService) {
    for (var i = 0; i < 10; i++) {
      this.ten[i] = i + 1;
    };
    for (var i = 0; i < 10; i++) {
      this.twenty[i] = i + 11;
    };
    for (var i = 0; i < 10; i++) {
      this.thirty[i] = i + 21;
    };
    for (var i = 0; i < 10; i++) {
      this.forty[i] = i + 31;
    };
    for (var i = 0; i < 10; i++) {
      this.fifty[i] = i + 41;
    };
    for (var i = 0; i < 10; i++) {
      this.sixty[i] = i + 51;
    };
    for (var i = 0; i < 10; i++) {
      this.seventy[i] = i + 61;
    };
    for (var i = 0; i < 10; i++) {
      this.eighty[i] = i + 71;
    };

  }
  public gameNumbers: number[] = new Array(20);
  private ten: number[] = new Array(10);
  private twenty: number[] = new Array(10);
  private thirty: number[] = new Array(10);
  private forty: number[] = new Array(10);
  private fifty: number[] = new Array(10);
  private sixty: number[] = new Array(10);
  private seventy: number[] = new Array(10);
  private eighty: number[] = new Array(10);
  private gifs: string[] = new Array(10);
  public currentNumber: number;
  public _this: any;
  gifOpen: boolean = false;
  showComplete: boolean = false;
  i: number = 0;
  gameCount: number = 1;
  obs: Observer<any> = {
        next(num: number) { console.log(num); setTimeout(function () { this.setNumber(num)}, 500); },
    error() { console.log("There was a problem in generating the numbers")},
    complete() { console.log('Finished sequence'); setTimeout(() => this.resetAndRun(), 30000); }
  };
  ngOnInit() {
    this.runGame(this.gameNumbers);
  }
  reload() {
    window.location.reload();
  }
  runGame = (numbers: number[]) => {
    numbers = this.gameNumbers;
    var _this = this;
  this.numberSvc.getNumbers({
     next(num: number) {_this.toggleGif(); console.log(num); _this.currentNumber=num; setTimeout(function () { _this.setNumber(num); _this.toggleGif();}, 5500); },
    error() { console.log("There was a problem in generating the numbers")},
    complete() { console.log('Finished sequence'); _this.showComplete=true; }
  });
  }

  even(nbr:number){
    return nbr%2===0;
  }
  setNumber = (num: number) => {
    this.gameNumbers[this.i] = num;
    this.i++;
  }
  toggleGif = () => {
    // console.log("toggle Gif");
    this.gifOpen = !this.gifOpen;
  }
  resetAndRun = () => {
    this.gameNumbers = new Array(20);
    this.gameCount++;
    this.showComplete = false;
    this.runGame(this.gameNumbers);
  }

  provideGif() {
    var nbr = this.currentNumber;
    var gif = "../../assets/images/black.png";
    if(nbr == 1 || nbr == 17 || nbr == 33 || nbr == 49 || nbr == 65)
    {
      gif = "../../assets/images/McBaby.gif";
    }
    if(nbr == 2 || nbr == 18 || nbr == 34 || nbr == 50 || nbr == 66)
    {
      gif = "../../assets/images/beer.gif";
    }
    if(nbr == 3 || nbr == 19 || nbr == 35 || nbr == 51 || nbr == 67)
    {
      gif = "../../assets/images/bunny_thief.gif";
    }
    if(nbr == 4 || nbr == 20 || nbr == 36 || nbr == 52 || nbr == 68)
    {
      gif = "../../assets/images/dance.gif";
    }if(nbr == 5 || nbr == 21 || nbr == 37 || nbr == 53 || nbr == 69)
    {
      gif = "../../assets/images/eff_you.gif";
    }if(nbr == 6 || nbr == 22 || nbr == 38 || nbr == 54 || nbr == 70)
    {
      gif = "../../assets/images/excited.gif";
    }if(nbr == 7 || nbr == 23 || nbr == 39 || nbr == 55 || nbr == 71)
    {
      gif = "../../assets/images/gnar.gif";
    }if(nbr == 8 || nbr == 24 || nbr == 40 || nbr == 56 || nbr == 72)
    {
      gif = "../../assets/images/myPrez.gif";
    }if(nbr == 9 || nbr == 25 || nbr == 41 || nbr == 57 || nbr == 73)
    {
      gif = "../../assets/images/phone.gif";
    }if(nbr == 10 || nbr == 26 || nbr == 42 || nbr == 58 || nbr == 74)
    {
      gif = "../../assets/images/puppy_rocker.gif";
    }if(nbr == 11 || nbr == 27 || nbr == 43 || nbr == 59 || nbr == 75)
    {
      gif = "../../assets/images/rage.gif";
    }if(nbr == 12 || nbr == 28 || nbr == 44 || nbr == 60 || nbr == 76)
    {
      gif = "../../assets/images/respect.gif";
    }if(nbr == 13 || nbr == 29 || nbr == 45 || nbr == 61 || nbr == 77)
    {
      gif = "../../assets/images/rock_on.gif";
    }if(nbr == 14 || nbr == 30 || nbr == 46 || nbr == 62 || nbr == 78)
    {
      gif = "../../assets/images/shocked.gif";
    }if(nbr == 15 || nbr == 31 || nbr == 47 || nbr == 63 || nbr == 79)
    {
      gif = "../../assets/images/ski.gif";
    }if(nbr == 16 || nbr ==32 || nbr == 48 || nbr == 64 || nbr == 80)
    {
      gif = "../../assets/images/spoon.gif";
    }    
    return gif;
  }
}
