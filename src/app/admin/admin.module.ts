import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { ViewListUtilisateursComponent } from './view-list-utilisateurs/view-list-utilisateurs.component';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TabView, TabViewModule} from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import {MatInputModule} from '@angular/material/input';
import { FormsModule,NgForm} from '@angular/forms';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { InscriptionComponent } from './inscription/inscription.component';
import { UpdateInscriptionComponent } from './update-inscription/update-inscription.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    ViewListUtilisateursComponent,
    InscriptionComponent,
    UpdateInscriptionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    DialogModule,
    TableModule,
    ButtonModule,
    RippleModule,
    InputTextModule ,
    MatInputModule,
    DropdownModule,
ScrollPanelModule,
TabViewModule,
FormsModule

  ]
})
export class AdminModule { }
