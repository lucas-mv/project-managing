import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-case-accordion',
  templateUrl: './case-accordion.component.html',
  styleUrls: ['./case-accordion.component.scss']
})
export class CaseAccordionComponent implements OnInit {

  @Input() case: string;
  @Input() status: string;

  testSteps: any;

  constructor() { }

  ngOnInit() {
    this.testSteps = [
      {
        status: 'waiting',
        step: 'I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot.',
        desiredOutput: 'I am Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. '
      },
      {
        status: 'error',
        step: 'I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot.',
        desiredOutput: 'I am Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. '
      },
      {
        status: 'done',
        step: 'I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot.',
        desiredOutput: 'I am Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. '
      }
    ];
  }
}
