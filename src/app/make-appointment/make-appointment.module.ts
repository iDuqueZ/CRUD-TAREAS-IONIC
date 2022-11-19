import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeAppointmentPageRoutingModule } from './make-appointment-routing.module';

import { MakeAppointmentPage } from './make-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MakeAppointmentPageRoutingModule
  ],
  declarations: [MakeAppointmentPage]
})
export class MakeAppointmentPageModule {}
