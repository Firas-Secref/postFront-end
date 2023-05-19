import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FicheprojetRoutingModule } from './ficheprojet-routing.module';
import { ViewListComponent } from './view-list/view-list.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { CreateProjetComponent } from './create-projet/create-projet.component';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import { FormsModule,NgForm, ReactiveFormsModule } from '@angular/forms';
import {TabView, TabViewModule} from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import {MatInputModule} from '@angular/material/input';
import { DetailsComponent } from './details/details.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';


@NgModule({
  declarations: [
    ViewListComponent,
    UpdateProjetComponent,
    CreateProjetComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FicheprojetRoutingModule,
    DialogModule,
    TableModule,
    ButtonModule,
    RippleModule,
    TabViewModule,
   InputTextModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    DialogModule,
    ScrollPanelModule




  ]
})
export class FicheprojetModule { }
