import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(profile: any): Promise<any> {
    const { id, emails, displayName } = profile;
    const user = {
      userId: id,
      email: emails[0].value,
      name: displayName,
    };
    return user;
  }

  async login(user: any) {
    const payload = { username: user.name, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
