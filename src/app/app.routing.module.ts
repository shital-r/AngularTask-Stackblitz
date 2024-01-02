import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpComponent } from '../create-emp/create-emp.component';
import { EmplistComponent } from '../emplist/emplist.component';

const routes: Routes = [
  { path: '', redirectTo: '/emplist', pathMatch: 'full' },
  // { path: 'create-emp', component: CreateEmpComponent },

  { path: 'empdata/:id', component: CreateEmpComponent },
  { path: 'emplist', component: EmplistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
