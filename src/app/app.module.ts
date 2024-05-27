import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
// import { AdminStaffInformationComponent } from './admin-staff-information/admin-staff-information.component';
// import { AdminComponent } from './admin/admin.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { AdminComponent } from './admin/admin.component';
import { AdminStudentInformationComponent } from './admin-student-information/admin-student-information.component';
import { AdminAnnouncementsComponent } from './admin-announcements/admin-announcements.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    AdminDashboardComponent,
    // AdminComponent,
    // AdminSidebarComponent,
    AdminStudentInformationComponent,
    AdminAnnouncementsComponent
    // AdminStaffInformationComponent,
    // AdminComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
