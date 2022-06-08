import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UserComponent } from './user/user.component';
import { PartComponent } from './part/part.component';
import { BrandComponent } from './brand/brand.component';
import { BudgetComponent } from './budget/budget.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    PartComponent,
    BrandComponent,
    BudgetComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
