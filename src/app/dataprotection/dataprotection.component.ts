import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataprotection',
  templateUrl: './dataprotection.component.html',
  styleUrls: ['./dataprotection.component.scss']
})
export class DataprotectionComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  // onTopScroll(){
  //   document.body.scrollTop = 0;

  // }
}
