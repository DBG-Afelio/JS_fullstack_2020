

import { AuthGuard } from '@nestjs/passport/dist/auth.guard';


export class BasicGuard extends AuthGuard('basic') {
  
}
