import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { AccordionComponent } from 'src/accordion/accordion.component';
import { AcordionItemComponent } from 'src/acordion-item/acordion-item.component';

/**
 * @title Accordion overview
 */
@Component({
  selector: 'cdk-accordion-overview-example',
  templateUrl: 'cdk-accordion-overview-example.html',
  styleUrls: ['cdk-accordion-overview-example.css'],
  standalone: true,
  imports: [
    CdkAccordionModule,
    NgFor,
    AccordionComponent,
    AcordionItemComponent,
  ],
})
export class CdkAccordionOverviewExample {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
