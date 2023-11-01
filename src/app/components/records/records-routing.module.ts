import { NgModule } from '@angular/core';
import { CreateComponent } from './create/create.component';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { RecordsComponent } from './records.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'records', component: RecordsComponent,
  children:[ 
    { path: 'list', component: ListComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'create', component: CreateComponent },
  ]
},
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule { }
