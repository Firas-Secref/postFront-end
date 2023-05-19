import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { ComposantsComponent } from './composants/composants.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';
import { SidebarComponent } from './composants/sidebar/sidebar.component';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { FooterComponent } from './composants/footer/footer.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from "@angular/material/core";
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from '@fullcalendar/angular';
import {DialogModule} from 'primeng/dialog';
import { InterceptorInterceptor } from './pages/services/interceptor.interceptor';
import { NotAllowedComponent } from './composants/not-allowed/not-allowed.component';
import { DialogService } from 'primeng/dynamicdialog';
@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ComposantsComponent,
    DashboardComponent,
    StatistiqueComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    NotAllowedComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ConfirmDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    
    
  ],
  providers: [DialogService,ConfirmationService,{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
