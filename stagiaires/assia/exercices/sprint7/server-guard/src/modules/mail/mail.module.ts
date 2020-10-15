import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRoot({
      //
    }),
  ],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
