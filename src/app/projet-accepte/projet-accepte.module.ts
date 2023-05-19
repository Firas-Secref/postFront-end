import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetAccepteRoutingModule } from './projet-accepte-routing.module';
import { CreateProjetAccepteComponent } from './create-projet-accepte/create-projet-accepte.component';
import { UpdateProjetAccepteComponent } from './update-projet-accepte/update-projet-accepte.component';
import { ViewListProjetAccepteComponent } from './view-list-projet-accepte/view-list-projet-accepte.component';

import { FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TabViewModule} from 'primeng/tabview';
import { FullCalendarModule } from '@fullcalendar/angular';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { NewProjectFormDialogComponent } from './new-project-form-dialog/new-project-form-dialog.component';
import {DialogService} from "primeng/dynamicdialog";











@NgModule({
  declarations: [
    CreateProjetAccepteComponent,
    UpdateProjetAccepteComponent,
    ViewListProjetAccepteComponent,
    NewProjectFormDialogComponent
  ],
  imports: [
    TabViewModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    ProjetAccepteRoutingModule,
    FullCalendarModule,
    DialogModule,
    ButtonModule,
    RippleModule,
   
    ReactiveFormsModule,

  ],
  providers: [
    DialogService
  ]
})
export class ProjetAccepteModule { }
