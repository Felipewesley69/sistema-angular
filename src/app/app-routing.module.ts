import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // CanActivate: []
    children: [
      {
        path: '', redirectTo: '/login', pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('../app/modules/public/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('../app/modules/public/cadastro/cadastro.module').then(m => m.CadastroModule)
  },

  //Not found
  {
    path: '**',
    redirectTo: '/login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
