import { Component } from 'angular2/core';

@Component({
    selector: 'counter',
    template: `
      <div>
        <span>Count: {{ count }}</span>
        <button (click)="onClick()">Add</button>
      </div>`
})
class Counter {
  count: number = 0;
  
  constructor() {
      
  }
  
  onClick() {
    this.count++;
  }
}

export default Counter;
