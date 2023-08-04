import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PathService } from '../core/services/path.service';
import { LaunchData } from '../core/launchdata';
import { HistoryService } from '../core/services/history.service';
import { HistoryEntryComponent } from '../history-entry/history-entry.component';
import { Executable } from '../core/executable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  executables: Executable[] = [];
  history: LaunchData[] = [];
  pathService: PathService = inject(PathService);
  historyService: HistoryService = inject(HistoryService);

  constructor(private router: Router) {
    this.pathService.getPaths().then((executables: Executable[]) => {
      this.executables = executables;
    });

    this.pathService.connect();

    this.historyService.getHistory().then((data: LaunchData[]) => {
      this.history = data;
    });



   }

   stopAll = () => {
    for(let i =0; i<this.executables.length;i++)
      this.pathService.stopApp(i);
   }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }

  ngOnDestroy() {
    this.pathService.close();
  }

}
