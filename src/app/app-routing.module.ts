import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReactComponent } from './components/vistas/react/react.component';
import { AngularComponent } from './components/vistas/angular/angular.component';
import { CssGridComponent } from './components/vistas/css-grid/css-grid.component';
import { SpringBootComponent } from './components/vistas/spring-boot/spring-boot.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'react', component: ReactComponent},
  {path: 'angular', component: AngularComponent},
  {path: 'cssGrid', component: CssGridComponent},
  {path: 'springBoot', component: SpringBootComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
