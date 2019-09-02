import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberServiceService {

  constructor() { }

  getNumber(): Observable<Number> {
    return of(Math.floor(Math.random() * Math.floor(79))+1);
  }
}
