import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
        AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <app-ng-style></app-ng-style>
    <br>

    <app-css></app-css>
    <br>

    <app-classes></app-classes>
    <br><br>

    <p [appResaltado]="'red'">
      Hola Mundo
    </p>
    <br>

    <app-ng-swith></app-ng-swith>

  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('inside constructor');
  }

  ngOnInit() {
    console.log('inside ngOnInit');
  }

  ngOnChanges(): void {
    console.log('inside ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('inside ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('inside ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('inside ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('inside ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('inside ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('inside ngOnDestroy');
  }


}
