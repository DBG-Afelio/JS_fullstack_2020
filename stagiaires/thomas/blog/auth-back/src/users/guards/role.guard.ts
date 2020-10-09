import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { User } from 'src/decorators/user.decorator';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(
     private readonly reflector: Reflector
  ) {

  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean>
  {
    const roles = this.reflector.get<string[]>('roles', context.getHandler())

    const user = context.switchToHttp().getRequest().user;

    if(roles.includes(user.role)) {
      return true;
    }

    throw new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED);
  }
}
