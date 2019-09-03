import { Component, OnInit } from '@angular/core';
import { NumberServiceService } from '../number-service.service'

@Component({
  selector: 'app-keno-board',
  templateUrl: './keno-board.component.html',
  styleUrls: ['./keno-board.component.css']
})
export class KenoBoardComponent implements OnInit {

  constructor(private numberSvc: NumberServiceService) {
    console.log(this.gameNumbers);
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

  ngOnInit() {
    var tempArray = this.gameNumbers;
    var i: number = 0;
    this.numberSvc.getNumbers({
      next(num: number) { console.log(num); tempArray[i] = num; i++ },
      complete() { console.log('Finished sequence'); console.log(tempArray); }
    });
  }

}
