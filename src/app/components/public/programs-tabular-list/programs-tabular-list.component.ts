import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ProgramsServiceApi } from '../landing-page/program-service-api.service';
import { lastValueFrom } from 'rxjs';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-programs-tabular-list',
  imports: [CommonModule,NzDividerModule, NzTableModule],
  templateUrl: './programs-tabular-list.component.html',
  styleUrl: './programs-tabular-list.component.css'
})
export class ProgramsTabularListComponent {
  @Input() programsList: any = [];
  constructor(
    private _ProgramsServiceApi: ProgramsServiceApi
  ) {}


  ngOnInit() {
  }

}
