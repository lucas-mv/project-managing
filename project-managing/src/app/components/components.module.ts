import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepCardComponent } from './step-card/step-card.component';
import { MaterialModule } from '../material/material.module';
import { CaseAccordionComponent } from './case-accordion/case-accordion.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    StepCardComponent,
    CaseAccordionComponent
  ],
  exports: [
    StepCardComponent,
    CaseAccordionComponent
  ]
})
export class ComponentsModule { }
