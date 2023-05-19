import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendrierRoutingModule } from './calendrier-routing.module';
import { ListeprojetsComponent } from './listeprojets/listeprojets.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TabView, TabViewModule} from 'primeng/tabview';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule,NgForm, ReactiveFormsModule } from '@angular/forms';
import { CreateProjetComponent } from './create-projet/create-projet.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { ViewListComponent } from './view-list/view-list.component';
import { InputTextModule } from 'primeng/inputtext';
import { DetailsComponent } from './details/details.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {StepsModule} from 'primeng/steps';
import {MenuItem} from 'primeng/api';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { CreateRegionComponent } from './create-region/create-region.component';
import { UpdateRegionComponent } from './update-region/update-region.component';
import { ViewListRegionComponent } from './view-list-region/view-list-region.component';
import { CreateTypeProjetComponent } from './create-type-projet/create-type-projet.component';
import { UpdateTypeProjetComponent } from './update-type-projet/update-type-projet.component';
import { ViewListTypeProjetComponent } from './view-list-type-projet/view-list-type-projet.component';
import { CreateTypeAchatComponent } from './create-type-achat/create-type-achat.component';
import { UpdateTypeAchatComponent } from './update-type-achat/update-type-achat.component';
import { ViewListTypeAchatComponent } from './view-list-type-achat/view-list-type-achat.component';
import { CreateDirectionAchatComponent } from './create-direction-achat/create-direction-achat.component';
import { UpdateDirectionAchatComponent } from './update-direction-achat/update-direction-achat.component';
import { ViewListDirectionAchatComponent } from './view-list-direction-achat/view-list-direction-achat.component';
import { DetailsProjetEncourComponent } from './details-projet-encour/details-projet-encour.component';




@NgModule({
  declarations: [
    ListeprojetsComponent,
    FormulaireComponent,
    CreateProjetComponent,
    UpdateProjetComponent,
    ViewListComponent,
    DetailsComponent,
    
    CreateRegionComponent,
    UpdateRegionComponent,
    ViewListRegionComponent,

    CreateTypeProjetComponent,
    UpdateTypeProjetComponent,
    ViewListTypeProjetComponent,
    
    CreateTypeAchatComponent,
    UpdateTypeAchatComponent,
    ViewListTypeAchatComponent,
    CreateDirectionAchatComponent,
    UpdateDirectionAchatComponent,
    ViewListDirectionAchatComponent,
    DetailsProjetEncourComponent,

  
   
  
  ],
  imports: [
  CommonModule,
  CalendrierRoutingModule,
  TableModule,
  ButtonModule,
  RippleModule,
  TabViewModule,
   DialogModule,
   DropdownModule,
   FormsModule,
   ReactiveFormsModule,
   InputTextModule,
   InputNumberModule,
   CalendarModule,
   PanelModule,
   StepsModule,
   ConfirmPopupModule

     ]
})
export class CalendrierModule { }
