/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Req, Res} from '@nestjs/common';
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

  @Post("/hello")
  postHello(@Body() body : object , @Req() req , @Res() res){
    res.status(201).send({
      status : "Product created successfully",
      datat : {
        product :{
          name : "Shoes",
          prix : 203
        }
      }
    })
  }

}
