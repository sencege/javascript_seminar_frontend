import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[][] = [];

  add(message: string, type:string = '') {
    this.messages.push([message, type]);
  }

  clear(message:string) {
    this.messages = this.messages.filter(m => m[0] !== message);
  }
  clearAll(){
    this.messages = [];
  }
}