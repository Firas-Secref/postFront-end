import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { StatistiqueComponent } from './pages/statistique/statistique.component';
import { FormulaireComponent } from './calendrier/formulaire/formulaire.component';
import { LoginComponent } from './pages/log/login/login.component';

const routes: Routes = [

  {
    path:'auth',
    loadChildren:()=>import('./pages/log/log.module').then(m=>m.LogModule)
  },

 /* {path:'statistique',component:StatistiqueComponent},*/
  {path:'',component:DashboardComponent,
  children:[
    {
      path:'statistique',component:StatistiqueComponent
    },
    {
      path: 'calendrier',
      loadChildren: () => import('./calendrier/calendrier.module').then(m => m.CalendrierModule)
    },
    {
      path:'fichedeprojet',
      loadChildren: () =>import('./ficheprojet/ficheprojet.module').then(m=>m.FicheprojetModule)
    },
    {
      path:'budget',
      loadChildren:()=>import('./budget/budget.module').then(m=>m.BudgetModule)
    },
    {
      path:'projetAccepte',
      loadChildren:()=>import('./projet-accepte/projet-accepte.module').then(m=>m.ProjetAccepteModule)
    },
    {
      path:'admin',
      loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
    }

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
