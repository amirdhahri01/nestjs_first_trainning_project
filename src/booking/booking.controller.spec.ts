/* eslint-disable prettier/prettier *//* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { BookingController } from './booking.controller';

describe('BookingController', () => {
  let controller: BookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingController],
    }).compile();

    controller = module.get<BookingController>(BookingController);
  });

  it.skip('should be defined', () => {
    expect(controller).toBeDefined();
  });

});
