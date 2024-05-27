import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
// import { AdminComponent } from './admin/admin.component';
import { AdminStaffInformationComponent } from './admin-staff-information/admin-staff-information.component';
import { AdminStudentInformationComponent } from './admin-student-information/admin-student-information.component';
import { AdminAnnouncementsComponent } from './admin-announcements/admin-announcements.component';

const routes: Routes = [
  // { path: "", component: SignInComponent },
  // { path: "admin", component: AdminComponent },
  // { path: "admin/dashboard", component: AdminDashboardComponent },
  { path: '', redirectTo: 'admin/dashboard', pathMatch:'full'},
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'admin/staff', component: AdminStaffInformationComponent },
  { path: 'admin/students', component: AdminStudentInformationComponent },
  { path: 'admin/announcements', component: AdminAnnouncementsComponent },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
  // { path: '**', redirectTo: '/dashboard' } // Fallback route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
