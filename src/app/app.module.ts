import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { SessionsModule } from './sessions/sessions.module';
import { HomeComponent } from './pages/home/home.component';
import { ImportComponent } from './pages/import/import.component';
import { TrimComponent } from './pages/trim/trim.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImportComponent,
    TrimComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    CoreModule,
    SessionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
