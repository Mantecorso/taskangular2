import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input () data: Object;
  constructor() { }

  ngOnInit() {
    console.log('tonto el que lo lea');
  }

}
