import { MailerService } from '@nestjs-modules/mailer';
import { BadGatewayException, Injectable } from '@nestjs/common';

interface Email {
  to: string;
  data: any;
}

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendWelcomeEmail(data: any) {
    const { email, name } = data

    const subject = `Welcome to ${name}`

    try {
      const emailData = await this.mailerService.sendMail({
        to: email,
        from: '"Textailor.io" <noreply@example.com>',
        subject,
        template: './welcome',
        context: { name },
      })

      if (emailData) {
        return emailData
      }
    } catch (error) {
     console.log(error)
     throw new BadGatewayException('Email send failed') 
    }
  }
}
