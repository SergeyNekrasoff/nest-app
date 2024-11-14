import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(payload) {
    return 'Hello'
  }
}
