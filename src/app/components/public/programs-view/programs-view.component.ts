import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FiltersComponent } from "../filters/filters.component";
import { ProgramsListComponent } from "../programs-list/programs-list.component";
import { PublicNavbarComponent } from "../../shared/public-navbar/public-navbar.component";
import { PublicFooterComponent } from "../../shared/public-footer/public-footer.component";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-programs-view',
  imports: [CommonModule, NzGridModule, FiltersComponent, ProgramsListComponent, PublicNavbarComponent, PublicFooterComponent, NzIconModule, NzMenuModule, NzLayoutModule],
  templateUrl: './programs-view.component.html',
  styleUrl: './programs-view.component.css'
})
export class ProgramsViewComponent {

}
