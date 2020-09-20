import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentralisedDataService {

  private paveNav = new BehaviorSubject('Home');
  currentNav = this.paveNav.asObservable();


  constructor() { }

  changeMessage(message: string) {
    this.paveNav.next(message);
  }
}
