import { Component } from '@angular/core';

interface Student {
  attendance: 'Present' | 'Absent';
}

@Component({
  selector: 'app-admin-student-information',
  templateUrl: './admin-student-information.component.html',
  styleUrls: ['./admin-student-information.component.css']
})
export class AdminStudentInformationComponent {



  displayedColumns: string[] = ['attendance'];
  dataSource: Student[] = [
    { attendance: 'Present' },
    { attendance: 'Absent' },
    { attendance: 'Present' }
  ];
}
