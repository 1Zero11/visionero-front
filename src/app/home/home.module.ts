import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { ExeDetailComponent } from '../exe-detail/exe-detail.component';
import { HistoryEntryComponent } from '../history-entry/history-entry.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, SharedModule, HomeRoutingModule, ExeDetailComponent, HistoryEntryComponent]
})
export class HomeModule {}
