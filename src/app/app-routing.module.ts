import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ImportComponent } from './pages/import/import.component';
import { StatusComponent } from './pages/status/status.component';
import { TrimComponent } from './pages/trim/trim.component';
import { SettingsComponent } from './sessions/pages/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'import',
    component: ImportComponent
  },
  {
    path: 'trim',
    component: TrimComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'status',
    component: StatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
