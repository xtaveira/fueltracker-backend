import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller'; // Importar o AuthController
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'Batata',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController], // Adicionar o AuthController aqui
  providers: [AuthService, GoogleStrategy],
  exports: [AuthService],
})
export class AuthModule {}
