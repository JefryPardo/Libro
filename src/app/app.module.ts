import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactComponent } from './components/vistas/react/react.component';
import { AngularComponent } from './components/vistas/angular/angular.component';
import { CssGridComponent } from './components/vistas/css-grid/css-grid.component';
import { SpringBootComponent } from './components/vistas/spring-boot/spring-boot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ReactComponent,
    AngularComponent,
    CssGridComponent,
    SpringBootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
