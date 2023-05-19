import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetRoutingModule } from './budget-routing.module';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { UpdateBudgetComponent } from './update-budget/update-budget.component';
import { ViewListComponent } from './view-list/view-list.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import { FormsModule,NgForm, ReactiveFormsModule } from '@angular/forms';
import {TabView, TabViewModule} from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import {MatInputModule} from '@angular/material/input';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import { DetailsComponent } from './details/details.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';







@NgModule({
  declarations: [
    CreateBudgetComponent,
    UpdateBudgetComponent,
    ViewListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    TableModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    ReactiveFormsModule,
    TabViewModule,
    InputTextModule,
    MatInputModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    DialogModule,
    ScrollPanelModule

   
   
  ]
})
export class BudgetModule { }
