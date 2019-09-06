import { Injectable } from '@angular/core';
import { Observable, of, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberServiceService {
  private numberArray: number[] = new Array(20);
  constructor() { this.loadNumbers(); }

  loadNumbers() {
    for (var i = 0; i < 20; i++) {
      let tempNbr = Math.floor(Math.random() * Math.floor(79)) + 1;
      while (this.numberArray.indexOf(tempNbr) > -1) {
        tempNbr = Math.floor(Math.random() * Math.floor(79)) + 1;
      }
      this.numberArray[i] = tempNbr;
    }
  }

  getNumbers(observer) {
    this.loadNumbers();
    let timeoutId;
  
    // Will run through an array of numbers, emitting one value
    // per second until it gets to the end of the array.
    function doSequence(arr, idx) {
      timeoutId = setTimeout(() => {
        observer.next(arr[idx]);
        if (idx === arr.length - 1) {
          observer.complete();
        } else {
          doSequence(arr, ++idx);
        }
      }, 10000);
    }
  
    doSequence(this.numberArray, 0);
  
    // Unsubscribe should clear the timeout to stop execution
    return {unsubscribe() {
      clearTimeout(timeoutId);
    }};
  }
}
