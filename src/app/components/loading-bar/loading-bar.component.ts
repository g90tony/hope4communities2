import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'loading-bar-animation',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.css'],
})
export class LoadingBarComponent implements OnInit {
  @Input() progression: number;

  constructor() {}

  ngOnInit(): void {}
}
