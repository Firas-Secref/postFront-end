import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjetAccepteComponent } from './create-projet-accepte/create-projet-accepte.component';
import { UpdateProjetAccepteComponent } from './update-projet-accepte/update-projet-accepte.component';
import { ViewListProjetAccepteComponent } from './view-list-projet-accepte/view-list-projet-accepte.component';

const routes: Routes = [
  {path:'all',component:CreateProjetAccepteComponent},
  {path:'update-projet-accepte/:id',component:UpdateProjetAccepteComponent},
  {path:'view',component:ViewListProjetAccepteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetAccepteRoutingModule {}
