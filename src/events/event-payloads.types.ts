export interface EventPayloads {
  'user.welcome': { name: string, email: string },
  'user.verify-email': { name: string, email: string, otp: string },
  'user.reset-password': { name: string, email: string, link: string },
}