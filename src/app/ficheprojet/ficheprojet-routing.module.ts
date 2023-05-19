import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjetComponent } from './create-projet/create-projet.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { ViewListComponent } from './view-list/view-list.component';
import { FormsModule,NgForm, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path:'create-projet/:id',component:CreateProjetComponent},
  {path:'update-projet/:id',component:UpdateProjetComponent},
  {path:'view-list',component:ViewListComponent},
  {path:'details/:id',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class FicheprojetRoutingModule { }
