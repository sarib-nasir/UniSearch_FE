import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardComponent, NzCardModule } from 'ng-zorro-antd/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormLayoutType, NzFormModule } from 'ng-zorro-antd/form';
import { PublicNavbarComponent } from "../../shared/public-navbar/public-navbar.component";
import { PublicFooterComponent } from "../../shared/public-footer/public-footer.component";
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { ProgramsServiceApi } from './program-service-api.service';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-landing-page',
  imports: [CommonModule,NzIconModule,NzFormModule,NzCardModule ,NzSpaceModule , NzCardComponent, NzTableModule, NzDividerModule, NzGridModule, FormsModule, NzButtonModule, NzInputModule, NzSelectModule, PublicNavbarComponent, PublicFooterComponent ],
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  WELCOME_TEXT: string = '';
  LOG_OUT_TEXT: string = '';
  USER_ICON: string = '';
  LOGOUT_ICON: string = '';
  CurrentDate: string = '';
  CurrentYear: string = '' 
  ProgramsList: any = [];

  constructor(
    private _ProgramsServiceApi: ProgramsServiceApi
  ) {
  }
  ngOnInit() {
    this.onResize();
    this.getProgramDetails();
    this.CurrentDate = new Date().toDateString();
    this.CurrentYear = new Date().getFullYear().toString();
  }
  
  getProgramDetails() {
    let body = {
      IS_ACTIVE: true
    }
    lastValueFrom(this._ProgramsServiceApi.GetProgramsDetail(body)).then(response => {
      if (response.statusCode == '00') {  
        this.ProgramsList = response.data;
      }
    });
  }

  onResize() {
    var width = window.innerWidth;
    if (width > 600 && width < 700) {

      this.WELCOME_TEXT = "user-name-sm";
      this.LOG_OUT_TEXT = "log-out-text-sm";
      this.USER_ICON = "user-icon-sm";
      this.LOGOUT_ICON = "log-out-icon-sm";
    }
    else if (width < 600) {
      this.USER_ICON = "user-icon-sm";
      this.LOGOUT_ICON = "log-out-icon-sm";
      this.WELCOME_TEXT = "user-name-xs";
      this.LOG_OUT_TEXT = "log-out-text-xs";
    }
    else if (width > 700) {
      this.WELCOME_TEXT = "user-name";
      this.LOG_OUT_TEXT = "log-out-text";
      this.USER_ICON = "user-icon";
      this.LOGOUT_ICON = "log-out-icon";
    }
  }
}
