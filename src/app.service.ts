import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const sayHello: string = 'hello';
    const sayOtherThing: string = 'Other Thing';
    const sayOtherThing2: string = 'Other Thing 2';
    return 'Hello World!';
  }
}
