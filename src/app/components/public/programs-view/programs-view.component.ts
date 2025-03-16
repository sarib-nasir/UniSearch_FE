import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FiltersComponent } from "../filters/filters.component";
import { ProgramsListComponent } from "../programs-list/programs-list.component";
import { PublicNavbarComponent } from "../../shared/public-navbar/public-navbar.component";
import { PublicFooterComponent } from "../../shared/public-footer/public-footer.component";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ProgramsTabularListComponent } from "../programs-tabular-list/programs-tabular-list.component";
import { ActivatedRoute } from '@angular/router';
import { decryptDetailParam } from '../../../core/utils/token.utils';
import { lastValueFrom } from 'rxjs';
import { ProgramsServiceApi } from '../landing-page/program-service-api.service';

@Component({
  selector: 'app-programs-view',
  imports: [CommonModule, NzGridModule, FiltersComponent, PublicNavbarComponent, PublicFooterComponent, NzIconModule, NzMenuModule, NzLayoutModule, ProgramsTabularListComponent],
  templateUrl: './programs-view.component.html',
  styleUrl: './programs-view.component.css'
})
export class ProgramsViewComponent {
  private route = inject(ActivatedRoute); 
  programName: string = '';
  programsList: any;





  constructor(
    private _ProgramsServiceApi: ProgramsServiceApi
  ) {
    this.route.queryParams.subscribe((params) => {
      this.programName = decryptDetailParam(params['programName']);
    });
  }

  ngOnInit() {
    this.handleFilters(null);
  }

  handleFilters(event: any) {
    let body = null
    if (event) {
      body = event
      body.IELTS_SCORE = body.IELTS_SCORE ? body.IELTS_SCORE.toString() : '';
    }else{
      body = {
        COUNTRY_ID: '',
        PROGRAM_NAME: this.programName,
        PROGRAM_MINIMUM_GPA: '',
        IELTS_SCORE: '',
        PROGRAM_TYPE_ID: '',
      }
    }
    lastValueFrom(this._ProgramsServiceApi.GetProgramsDetail(body)).then(response => {
      if (response.status_code == '00') {  
        this.programsList = response.data;
      }
    });
  }
  handleFilterEvent(event: any) {
    console.log("Received in Parent:", event);
  }
}
