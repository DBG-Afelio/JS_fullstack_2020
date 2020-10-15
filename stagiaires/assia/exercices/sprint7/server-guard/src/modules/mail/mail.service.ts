import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async pwdForgotEmail(userEmail: string) {
    await this.mailerService.sendMail({
      to: userEmail,
      from: 'noreply@nestjs.com', //sender address
      subject: 'Password renewal request',
      text:
        "bablabla... you've requested to renew your password....click on the link...",
      html:'<b>welcome</b>'
    });
  }
}
