import { Component } from 'angular2/core';
import List from './components/list.component.ts';

@Component({
    selector: 'angular2',
    template: `
      <h1> {{ title }} </h1>
      <list [items]="state.items"></list>
      `,
      directives: [List]
      
})
class AppComponent {
  title: string = 'angular2 sample';
  state: Object = {};
  
  constructor() {
     this.state = {
       items: [1,2,3,4,5]
     }
  }
}

export default AppComponent;
