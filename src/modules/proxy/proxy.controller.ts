import { All, Controller, Req, Res } from '@nestjs/common'
import { ProxyService } from './proxy.service'
import type { FastifyRequest, FastifyReply } from 'fastify'
import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '../auth/auth.guard'

@Controller('/api/*')
export class ProxyController {
  constructor (private readonly proxy: ProxyService) {}

  @All()
  @UseGuards(AuthGuard)
  async handle(@Req() request: FastifyRequest, @Res() response: FastifyReply) {
    await this.proxy.handle(request, response)
  }
}
