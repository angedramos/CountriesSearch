import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-loadingspinner',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'./loadingspinner.component.html',
  styleUrl: './loadingspinner.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingspinnerComponent { }
