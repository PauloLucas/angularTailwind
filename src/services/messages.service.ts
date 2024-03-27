import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  message: string = '';

  constructor() { }

  add(mesage: string):void {
    this.message = mesage;

    setTimeout(() => {
      this.clear();
    }, 4000);
  }

  clear():void {
    this.message = '';
  }
}
