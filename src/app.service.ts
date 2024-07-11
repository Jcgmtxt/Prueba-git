import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const sayHello: string = 'hello';
    const sayOtherThing: string = 'Other Thing';
    return 'Hello World!';
  }
}
