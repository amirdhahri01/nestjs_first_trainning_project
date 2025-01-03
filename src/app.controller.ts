/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/hello-world")
  getHelloWorld(): string {
    return this.appService.getHelloWorld();
  }

  @Post("/hello")
  postHello(@Body() body: object, req: Request, res: Response) {
    res.status(201).send({
      status: "Product created successfully",
      datat: {
        product: {
          name: "Shoes",
          prix: 203
        }
      },
      body: {
        body: req.body
      }
    })
  }

}
