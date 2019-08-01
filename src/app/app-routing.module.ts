import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';
import { UpdateUserDataComponent } from './update-user-data/update-user-data.component'

const routes: Routes = [
      {path: '', component: DisplayUserDataComponent},
      {path: 'customer', component: InputUserDataFormComponent},
      {path: 'update/:id', component: UpdateUserDataComponent},
      {path: '**', redirectTo: '', pathMatch: 'full'}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
