import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';


const routes: Routes = [
  {path:"bind", component:BindingComponent}, 
   {path:"dir", component:DirectiveComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
