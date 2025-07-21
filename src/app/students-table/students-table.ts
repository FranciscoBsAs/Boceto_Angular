import { Component, Input } from '@angular/core';
import { studentInterface } from '../../shared/sharedContent/entities';
import { MatTableModule } from '@angular/material/table'
import { CommonModule } from '@angular/common';
import { FullNamePipe } from '../../shared/pipes/full-name-pipe';

@Component({
  selector: 'students-table',
  imports: [ MatTableModule, CommonModule, FullNamePipe ],
  templateUrl: './students-table.html',
  styleUrl: './students-table.css'
})
export class StudentsTable {

  @Input() studentsInTable : studentInterface[] = []

  columnTitles : string[] = [ 'FullName', 'DNI', 'Age', 'Average' ] 

}
