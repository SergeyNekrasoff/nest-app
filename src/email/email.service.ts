import { MailerService } from '@nestjs-modules/mailer';
import { BadGatewayException, Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EventPayloads } from 'src/events/event-payloads.types';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  @OnEvent('user.welcome')
  async sendWelcomeEmail(data: EventPayloads['user.welcome']) {
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

  @OnEvent('user.verify-email')
  async verifyEmail(data: EventPayloads['user.verify-email']) {
    const { name, email, otp } = data

    const subject = `Textailor: OTP to Verify Email`

    try {
      const verify = await this.mailerService.sendMail({
        to: email,
        subject,
        template: './verify-email',
        context: {
          otp,
          name,
        }
      })

      if (verify) {
        return verify
      }
    } catch (error) {
      console.log(error)
      throw new BadGatewayException('OTP code send failed') 
    }
  }

  @OnEvent('user.reset-password')
  async resetPassword(data: EventPayloads['user.reset-password']) {
    const { name, email, link } = data

    const subject = `Textailor: Reset Password`

    try {
      const reset = await this.mailerService.sendMail({
        to: email,
        subject,
        template: './reset-password',
        context: {
          name,
          link,
        }
      })
      
      if (reset) {
        return reset
      }
    } catch (error) {
      console.log(error)
      throw new BadGatewayException('Reset password send failed')
    }
  }
}
