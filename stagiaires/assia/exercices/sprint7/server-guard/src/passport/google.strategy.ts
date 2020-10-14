import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';
import { GoogleInfo } from 'src/interfaces/googleInfo';

config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/redirect', // << a remplacer par une var env/globale
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails, id } = profile;
    console.log('from google strategy ---------- profile : ', profile);
    const googleInfo: GoogleInfo = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      googleId: id,
    };
    done(null, googleInfo);
  }
}
