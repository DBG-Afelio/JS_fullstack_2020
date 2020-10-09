import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PayloadInterface } from 'src/users/interfaces/payload.interface';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/users/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
// Modele par défaut de la JWT strategy
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
      private configService: ConfigService,
      @InjectRepository(UserEntity)
      private userRepository: Repository<UserEntity>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('SECRET')
    });
  }
zeq
  async validate(payload: PayloadInterface) {

    // Recuperation de l'utilisateur
    console.log(payload);
    const user = await this.userRepository.findOne({
        username: payload.username
    })

    // Si l'utilisateur existe, il est retourné et ce qui est retourné est mis dans la requete

    if(user) {

        const { password, salt, ...result } = user;
        delete user.salt;
        delete user.password;
        return user;
    } else {
        // Sinon je jete une erreur - utilisateur non authorisé
        throw new UnauthorizedException()
    }   

  }
}