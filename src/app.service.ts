/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHelloWorld(): string {
    return "Special Hello World";
  }
  sayWelcomeToTheUser(): string {
    return "Welcome to nestjs"
  }
}
