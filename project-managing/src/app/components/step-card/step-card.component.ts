import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-card',
  templateUrl: './step-card.component.html',
  styleUrls: ['./step-card.component.scss']
})
export class StepCardComponent implements OnInit {

  @Input() status: string;
  @Input() step: string;
  @Input() desiredOutput: string;

  constructor() { }

  ngOnInit() {
  }

}
