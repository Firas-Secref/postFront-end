import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjetComponent } from './create-projet/create-projet.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ListeprojetsComponent } from './listeprojets/listeprojets.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { ViewListComponent } from './view-list/view-list.component';
import { DetailsComponent } from './details/details.component';

import { CreateRegionComponent } from './create-region/create-region.component';
import { ViewListRegionComponent } from './view-list-region/view-list-region.component';
import { UpdateRegionComponent } from './update-region/update-region.component';

import { UpdateTypeProjetComponent } from './update-type-projet/update-type-projet.component';
import { CreateTypeProjetComponent } from './create-type-projet/create-type-projet.component';
import { ViewListTypeProjetComponent } from './view-list-type-projet/view-list-type-projet.component';


import { CreateDirectionAchatComponent } from './create-direction-achat/create-direction-achat.component';
import { UpdateDirectionAchatComponent } from './update-direction-achat/update-direction-achat.component';
import { ViewListDirectionAchatComponent } from './view-list-direction-achat/view-list-direction-achat.component';
import { CreateTypeAchatComponent } from './create-type-achat/create-type-achat.component';
import { UpdateTypeAchatComponent } from './update-type-achat/update-type-achat.component';
import { ViewListTypeAchatComponent } from './view-list-type-achat/view-list-type-achat.component';



const routes: Routes = [
  {path:'listeprojets',component:ListeprojetsComponent},
  {path:'formulaire',component:FormulaireComponent},
  {path:'create-projet',component:CreateProjetComponent},
  {path:'update-projet/:id',component:UpdateProjetComponent},
  {path:'view-list',component:ViewListComponent},
  {path:'details/:id',component:DetailsComponent},
/*region*/
  {path:'create-region',component:CreateRegionComponent},
  {path:'view-list-region',component:ViewListRegionComponent},
  {path:'update-region/:id',component:UpdateRegionComponent},
/*typeprojet*/
  {path:'create-type-projet',component:CreateTypeProjetComponent},
  {path:'update-type-projet/:id',component:UpdateTypeProjetComponent},
  {path:'view-list-type-projet',component:ViewListTypeProjetComponent},
/*typeachat*/
  {path:'create-type-achat',component:CreateTypeAchatComponent},
  {path:'update-type-achat/:id',component:UpdateTypeAchatComponent},
  {path:'view-list-type-achat',component:ViewListTypeAchatComponent},

/*direction achat*/
  {path:'create-direction-achat',component:CreateDirectionAchatComponent},
  {path:'update-diection-achat/:id',component:UpdateDirectionAchatComponent},
  {path:'view-list-direction-achat',component:ViewListDirectionAchatComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendrierRoutingModule { }
