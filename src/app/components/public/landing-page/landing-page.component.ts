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
import { ProgramsListComponent } from "../programs-list/programs-list.component";


@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, NzIconModule, NzFormModule, NzCardModule, NzSpaceModule, NzCardComponent, NzGridModule, FormsModule, NzButtonModule, NzInputModule, NzSelectModule, PublicNavbarComponent, PublicFooterComponent, ProgramsListComponent],
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  constructor() {}

  ngOnInit() {
  }
  
}
