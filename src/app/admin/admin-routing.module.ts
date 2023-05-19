import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewListUtilisateursComponent } from './view-list-utilisateurs/view-list-utilisateurs.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { UpdateInscriptionComponent } from './update-inscription/update-inscription.component';

const routes: Routes = [

  {path:'view-list-utilisateurs',component:ViewListUtilisateursComponent},
  {path:'inscription',component:InscriptionComponent},

  {path:'update-utilisateur/:id',component:UpdateInscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
