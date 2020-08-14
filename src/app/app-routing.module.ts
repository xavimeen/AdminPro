import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Módulos
import {PagesRoutingModule} from './pages/pages.routing';
import {AuthRoutingModule} from './auth/auth.routing';

import {NotpagefoundComponent} from './notpagefound/notpagefound.component';

const routes: Routes= [

  // path: '/dashboard' PagesRouting
  // path: '/login' authRouting
  // path: '/register' authRouting
  
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  {path: '**', component: NotpagefoundComponent}

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
