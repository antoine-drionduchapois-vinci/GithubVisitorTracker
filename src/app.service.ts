import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  postDate(time: string): void {
    console.log('LookUp : ' + time);
  }
}
