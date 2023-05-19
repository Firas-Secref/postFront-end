import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { UpdateBudgetComponent } from './update-budget/update-budget.component';
import { ViewListComponent } from './view-list/view-list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [

  {path:'create-budget/:id',component:CreateBudgetComponent},
  {path:'update-budget/:id',component:UpdateBudgetComponent},
  {path:'view-list',component:ViewListComponent},
  {path:'details/:id',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
