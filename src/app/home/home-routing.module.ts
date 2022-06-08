import { BudgetComponent } from './budget/budget.component';
import { BrandComponent } from './brand/brand.component';
import { PartComponent } from './part/part.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UserComponent},
  {path: 'parts', component: PartComponent},
  {path: 'brands', component: BrandComponent},
  {path: 'budgets', component: BudgetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
