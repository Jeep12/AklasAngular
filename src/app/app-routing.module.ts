import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { ItemL2ListComponent } from './item-l2-list/item-l2-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'shop',
    component:ItemL2ListComponent
  },
  {
    path:'home',
    component:HomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {
  constructor (private router:Router){
    this.router.errorHandler = () =>{
      this.router.navigate(['home']);
    }
  }
 }
