import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSelectModule, NzSelectSizeType } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-filters',
  imports: [CommonModule, NzFormModule, NzSelectModule,NzLayoutModule,NzInputModule,FormsModule,ReactiveFormsModule,NzButtonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  @Input() programName: string = '';
  @Output() filterBody = new EventEmitter<any>();
  country: string = '';
  program: string = '';
  gpa: string = '';
  ielts: string = '';
  programType: string = '';
  Language: string = '';


  constructor() {}


  ngOnInit() {
    console.log('FiltersComponent ngOnInit');
  }

  SearchPrograms() {
    let body = {
      COUNTRY_ID: this.country,
      PROGRAM_NAME: this.programName,
      PROGRAM_MINIMUM_GPA: this.gpa,
      IELTS_SCORE: this.ielts,
      PROGRAM_TYPE_ID: this.programType,
    }
    this.filterBody.emit(body);
  }
}
