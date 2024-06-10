import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private authService: AuthService) {
    super({
      clientID:
        '146221598356-cjkso83957kd2vq425jo8donn3s82i0k.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3001/auth/google/callback', // Atualizado para a porta do backend
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const user = await this.authService.validateUser(profile);
    done(null, user);
  }
}
