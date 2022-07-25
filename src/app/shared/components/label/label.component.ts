import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input('value') value: string;
    @Input('label') label:string;
  @Input('styleValue') styleValue: string;

  constructor() { }

  ngOnInit() {
    if (this.styleValue) {
      this.styleValue = this.styleValue + " word-break";
    } else {
      this.styleValue = "word-break";
    }

    if (this.value === '0') {
      this.value = '0';
    }
  }
}
