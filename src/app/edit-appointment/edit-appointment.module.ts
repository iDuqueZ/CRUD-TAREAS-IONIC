import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditAppointmentPage } from './edit-appointment.page';

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [EditAppointmentPage]
})
export class EditAppointmentPageModule {}
