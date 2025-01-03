/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/hello-world")
  getHelloWorld() : string{
    return this.appService.getHelloWorld();
  }

  @Post("/hello/:name/:age/:nationality")
  postHello(@Param() params : object){
    return params;
  }

}
