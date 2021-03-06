import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LandingPagePageRoutingModule } from './landing-page-routing.module';
import { LandingPagePage } from './landing-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LandingPagePage]
})
export class LandingPagePageModule { }
