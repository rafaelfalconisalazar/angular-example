import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qs',
  templateUrl: './qs.component.html',
  styleUrls: ['./qs.component.css']
})
export class QsComponent implements OnInit {

  static URL='quienes-somos';
  constructor() { }

  ngOnInit(): void {
  }

}
