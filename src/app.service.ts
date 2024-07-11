import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const sayHello: string = 'hello';
    return 'Hello World!';
  }
}
