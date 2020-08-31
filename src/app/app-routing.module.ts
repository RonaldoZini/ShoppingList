import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './features/compras/compras.component';

const routes: Routes = [
  { path: 'compras',  component: ComprasComponent },
  { path: '', redirectTo: '/compras', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
