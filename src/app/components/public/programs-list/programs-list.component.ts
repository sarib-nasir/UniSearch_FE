import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ProgramsServiceApi } from '../landing-page/program-service-api.service';
import { lastValueFrom } from 'rxjs';
import { NzDividerModule } from 'ng-zorro-antd/divider';


interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-programs-list',
  imports: [CommonModule,NzDividerModule, NzTableModule],
  templateUrl: './programs-list.component.html',
  styleUrl: './programs-list.component.css'
})
export class ProgramsListComponent {
  programsList: any = [];

  constructor(
    private _ProgramsServiceApi: ProgramsServiceApi
  ) {}


  ngOnInit() {
    this.getProgramDetails();
  }
  getProgramDetails() {
    let body = {
      IS_ACTIVE: true
    }
    lastValueFrom(this._ProgramsServiceApi.GetProgramsDetail(body)).then(response => {
      if (response.status_code == '00') {  
        this.programsList = response.data;
      }
    });
  }

  
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
}
