import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogRoutingModule } from './log-routing.module';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TabView, TabViewModule} from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import {MatInputModule} from '@angular/material/input';
import {ScrollPanelModule} from 'primeng/scrollpanel';

@NgModule({
  declarations: [
    LoginComponent,

  ],
  imports: [
    CommonModule,
    LogRoutingModule,
    DialogModule,
    TableModule,
    ButtonModule,
    RippleModule,
    TabViewModule,
    InputTextModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollPanelModule




  ]
})
export class LogModule { }
