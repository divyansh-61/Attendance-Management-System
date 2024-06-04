import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { ScrollingModule } from '@angular/cdk/scrolling';


import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminStudentInformationComponent } from './admin-student-information/admin-student-information.component';
import { AdminAnnouncementsComponent } from './admin-announcements/admin-announcements.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    AdminDashboardComponent,
    AdminStudentInformationComponent,
    AdminAnnouncementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
