import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // Replace with your markup
  template: `
  <div *responsive='foo'></div>
`,
  styles: [ `h2 { font-weight: normal; }
  `]
})


export class AppComponent  {
  // your code goes here
}
