import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { PathService } from '../core/services/path.service';
import { Observable, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Executable } from '../core/executable';

@Component({
  selector: 'app-exe-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exe-detail.component.html',
  styleUrls: ['./exe-detail.component.scss']
})
export class ExeDetailComponent {
  private _pathSub!: Subscription;
  @Input() executable!: Executable;
  message = '';

  constructor(public pathService: PathService){
    this.pathService.connect();
  }

  sendMessage(message: string) {
    this.pathService.sendMessage(message);
  }

  turnApp = () => {
    if(this.executable.is_running)
      this.pathService.stopApp(this.executable.id);
    else
      this.pathService.startApp(this.executable.id);
  };
}
