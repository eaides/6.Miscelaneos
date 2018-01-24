import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <app-ng-style></app-ng-style>

    <app-css></app-css>

    <app-classes></app-classes>

    <p [appResaltado]="'red'">
    Hola Mundo
    </p>

    <app-ng-swith></app-ng-swith>

  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
