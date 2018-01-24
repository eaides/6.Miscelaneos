import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-swith',
  templateUrl: './ng-swith.component.html',
  styles: []
})
export class NgSwithComponent implements OnInit {

  // Use the following values:
  // primary - secondary - success - warning - info - light - dark
  // default will be alert

  alerta: string = 'what?!';

  constructor() { }

  ngOnInit() {
  }

}
