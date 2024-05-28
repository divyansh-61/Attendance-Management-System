import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule]
})
export class AdminDashboardComponent {
  selected: Date | null | undefined;
}
