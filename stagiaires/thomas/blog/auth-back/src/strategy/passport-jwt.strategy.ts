import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
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
      // process.env.SECRET
      secretOrKey: configService.get('SECRET'),
    });
  }

  async validate(payload: PayloadInterface) {

    // Recuperation de l'utilisateur
    const user = await this.userRepository.findOne({
        username: payload.username
    })

    // Si l'utilisateur existe, il est retourné et ce qui est retourné est mis dans la requete

    if(user) {

        const { password, salt, ...result } = user;
        return result;
    } else {
        // Sinon je jete une erreur - utilisateur non authorisé
        throw new HttpException(`utilisateur non authorisé`, HttpStatus.UNAUTHORIZED)
    }   
    
  }
}