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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/vendors/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { StatusComponent } from './pages/status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImportComponent,
    TrimComponent,
    NavbarComponent,
    FooterComponent,
    SettingsComponent,
    StatusComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CoreModule,
    SessionsModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
