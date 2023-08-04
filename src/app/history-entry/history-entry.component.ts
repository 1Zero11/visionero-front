import { CommonModule, formatDate } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LaunchData } from '../core/launchdata';

@Component({
  selector: 'app-history-entry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './history-entry.component.html',
  styleUrls: ['./history-entry.component.scss']
})
export class HistoryEntryComponent {
  @Input() entry!: LaunchData;

  prettyDate = (date: Date) =>{
    return formatDate(date, 'short', 'en-US');
  }
}
