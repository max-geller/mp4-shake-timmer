import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './vendors/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class SharedModule { }
