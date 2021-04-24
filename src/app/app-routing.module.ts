import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ScoreComponent } from './score/score.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"bind", component:BindingComponent}, 
   {path:"dir", component:DirectiveComponent},
   {path:"par", component:ParentComponent},
   {path:"cri", component:ScoreComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
