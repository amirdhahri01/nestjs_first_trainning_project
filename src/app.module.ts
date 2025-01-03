/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingControllerController } from './booking-controller/booking-controller.controller';
import { BookingController } from './booking/booking.controller';

@Module({
  imports: [],
  controllers: [AppController, BookingControllerController, BookingController],
  providers: [AppService],
})
export class AppModule {}
