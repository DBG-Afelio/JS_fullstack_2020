import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
dotenv.config();
import { ConfigModule } from '@nestjs/config';
import { ArticleModule } from './modules/article/article.module';
import { CommentModule } from './modules/comment/comment.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { TagModule } from './modules/tag/tag.module';
import { JwtStrategy } from './passport/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './modules/auth/constants';
import { AccessControlModule } from 'nest-access-control';
import { roles } from './constants/roles';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        // host: 'assia-rachdi.ga',
        // port: 25,
        // secure: false,
        // requireTLS: true,
        service: process.env.MAIL_PROVIDER,
        auth: {
          user: process.env.MAIL_SENDER_USER,
          pass: process.env.MAIL_SENDER_PASS,
        },
      },
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
    }),
    AccessControlModule.forRoles(roles), // << a decommenter apres avoir mis en place le roleBuilder et maj les CTRL/services sur les req a controler
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

    AuthModule,
    UserModule,
    ArticleModule,
    CommentModule,
    TagModule,
  ],
  controllers: [AppController],
  providers: [
    {
      // from NestJS doc : [In terms of dependency injection, global pipes registered from outside of any module (with useGlobalPipes() as in main.ts) cannot inject dependencies since the binding has been done outside the context of any module. In order to solve this issue, you can set up a global pipe directly from any module using the following construction]
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    //   {
    //       provide: APP_GUARD,
    //       useClass: RolesGuard,
    //   },
    AppService,
  ],
})
export class AppModule {}
