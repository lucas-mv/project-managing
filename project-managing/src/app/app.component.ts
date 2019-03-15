import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-managing';

  testSteps = [
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
