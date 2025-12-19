import { Module } from '@nestjs/common'
import { AuthGuard } from './auth.guard'
import { JwtModule } from '@nestjs/jwt'
import { APP_GUARD } from '@nestjs/core'

@Module({
  imports: [JwtModule.register({ secret: 'a-string-secret-at-least-256-bits-long' })],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    }
  ],
})
export class AuthModule {}
