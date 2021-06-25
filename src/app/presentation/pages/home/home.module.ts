import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from 'src/app/design/components/atomic/navbar/navbar.module';
import  { CardModule } from 'src/app/design/components/atomic/card/card.module';
import { SpinnerComponent } from 'src/app/design/components/atomic/spinner/spinner.component';
import { SpinnerModule } from 'src/app/design/components/atomic/spinner/spinner.module';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component: HomeComponent}
]


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    CardModule,
    SpinnerModule,
  ]
})
export class HomeModule { }
