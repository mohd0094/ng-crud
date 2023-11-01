import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';
import { RecordsRoutingModule } from "./records-routing.module";
import { FilterPipe } from "../filter.pipe";
import { RecordsComponent } from "./records.component";
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListComponent } from './list/list.component';




@NgModule({
    declarations: [
        RecordsComponent,
        CreateComponent,
        EditComponent,
        HeaderComponent,
        ListComponent,
        FilterPipe
    ],
    imports: [
        CommonModule,
        RecordsRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgxPaginationModule,
      ],
  })
  export class RecordsModules { }