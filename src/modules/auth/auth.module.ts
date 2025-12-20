import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthGuard } from './auth.guard'

@Module({
  imports: [JwtModule.register({ secret: 'a-string-secret-at-least-256-bits-long' })],
  providers: [AuthGuard],
  exports: [AuthGuard, JwtModule],
})
export class AuthModule {}
