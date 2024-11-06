import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ListaPerfilesComponent } from './components/lista-perfiles/lista-perfiles.component';
import { PerfilCompletarComponent } from './components/perfil-completar/perfil-completar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BuscarComponent,
    ListaPerfilesComponent,
    PerfilCompletarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
