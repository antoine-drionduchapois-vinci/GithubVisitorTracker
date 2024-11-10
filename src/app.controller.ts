import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('ping')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getInfo(): void {
    this.appService.postDate(new Date().toISOString());
  }
}
