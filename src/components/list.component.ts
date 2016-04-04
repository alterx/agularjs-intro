import { Component, Input } from 'angular2/core';
import Counter from './counter.component.ts';

@Component({
    selector: 'list',
    template: `
      <ul>
        <li *ngFor="#item of items">
        {{ item }}
        <counter></counter>
        </li>
      </ul>`,
    directives: [Counter]
})
class List {
  @Input() items: Array<number> = [];
  
  constructor() {
  }
}

export default List;
