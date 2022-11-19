import { Component, OnInit } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { AppointmentService } from './../shared/appointment.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  bookings = [];
  constructor(private aptService: AppointmentService) {}

  ngOnInit(): void {
    this.fetchBookings();
    const bookingRes = this.aptService.getBookingList();
      bookingRes.snapshotChanges().subscribe(res => {
      this.bookings = [];
      res.forEach(item => {
        // eslint-disable-next-line prefer-const
        let a = item.payload.toJSON();
        // eslint-disable-next-line @typescript-eslint/dot-notation
        a['$key'] = item.key;
        this.bookings.push(a as Appointment);
      });
    });
  }
  fetchBookings() {this.aptService.getBookingList().valueChanges().subscribe(res => {console.log(res);});}
  deleteBooking(id) {
    console.log(id);
    if (window.confirm('Al marcar esta tara como completada desapareserá ¿Estas seguro?')) {this.aptService.deleteBooking(id);}
  }
}
