import {Component} from '@angular/core';

const greeting = 'Hello!';
const myTemplate = '<div *ngIf="show">' + greeting + '</div>';

@Component({selector: 'test-cmp', template: myTemplate})
export class TestCmp {
}
