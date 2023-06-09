import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getWelcome(): any {
    const response = {
      message: 'Welcome Employee Service version 1'
    }
    return JSON.parse(JSON.stringify(response));
  }
}
