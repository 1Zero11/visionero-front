import { Injectable } from '@angular/core';
import { LaunchData } from '../launchdata';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  url = 'http://localhost:8000/history';


  async getHistory(): Promise<LaunchData[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

}
