import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  users = [
    {
      name: 'jean',
      password: 'valjean',
    },
  ];

  register(username, password) {
    this.users.push({ name, password });
  }

  validateUser(name, password) {
    const foundUser = this.users.find(
      user => user.name == name && user.password == password,
    );
    if (!foundUser) {
      throw new UnauthorizedException();
    }
    return foundUser;
  }
}
