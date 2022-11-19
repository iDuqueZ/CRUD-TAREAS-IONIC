import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppointmentService } from './../shared/appointment.service';
@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.page.html',
  styleUrls: ['./edit-appointment.page.scss'],
})
export class EditAppointmentPage implements OnInit {
  updateBookingForm: FormGroup;
  id: any;
  constructor(
    private aptService: AppointmentService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getBooking(this.id).valueChanges().subscribe(res => {
      this.updateBookingForm.setValue(res);
    });
  }
  ngOnInit() {
    this.updateBookingForm = this.fb.group({
      title: [''],
      description: [''],
      hours: [''],
      course: ['']
    });
    console.log(this.updateBookingForm.value);
  }
  updateForm() {
    this.aptService.updateBooking(this.id, this.updateBookingForm.value).then(() => {this.router.navigate(['/home']);})
      .catch(error => console.log(error));
  }
}
