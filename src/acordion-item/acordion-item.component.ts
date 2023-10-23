import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@Component({
  selector: 'app-acordion-item',
  standalone: true,
  templateUrl: './acordion-item.component.html',
  styleUrls: ['./acordion-item.component.scss'],
  imports: [CdkAccordionModule, NgFor, CommonModule],
})
export class AcordionItemComponent {
  @Input() index: number;
}
