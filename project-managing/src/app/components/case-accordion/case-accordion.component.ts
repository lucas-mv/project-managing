import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-case-accordion',
  templateUrl: './case-accordion.component.html',
  styleUrls: ['./case-accordion.component.scss']
})
export class CaseAccordionComponent implements OnInit {

  @Input() case: string;
  @Input() status: string;
  @Input() testSteps: any;

  statusIcon: string;

  constructor() { }

  ngOnInit() {
    this.initializeStatus();
  }

  initializeStatus() {
    switch (this.status) {
      case 'waiting':
        this.statusIcon = 'warning';
        break;
      case 'error':
        this.statusIcon = 'error';
        break;
      case 'done':
        this.statusIcon = 'check';
        break;
      default:
        this.statusIcon = 'device_unknown';
    }
  }
}
