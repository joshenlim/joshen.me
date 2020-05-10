import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { SettingsComponent } from './settings/settings.component'
import { InboxComponent } from './inbox/inbox.component';;

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: InboxComponent,
    data: {
      animation: 'HomePage'
    }
  },
  {
    path: 'works',
    component: SettingsComponent,
    data: {
      animation: 'WorksPage'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {
    // Preloads all lazy-loaded modules (only)
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
