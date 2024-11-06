import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilCompletarComponent } from './components/perfil-completar/perfil-completar.component';
import { ListaPerfilesComponent } from './components/lista-perfiles/lista-perfiles.component';

const routes: Routes = [
  { path: '', component: ListaPerfilesComponent },
  { path: 'completar-perfil', component: PerfilCompletarComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
