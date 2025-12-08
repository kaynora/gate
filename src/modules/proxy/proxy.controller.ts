import { All, Controller, Req, Res } from '@nestjs/common'
import { ProxyService } from './proxy.service'
import type { FastifyRequest, FastifyReply } from 'fastify'

@Controller('*')
export class ProxyController {
  constructor (private readonly proxy: ProxyService) {}

  @All()
  async handle(@Req() request: FastifyRequest, @Res() response: FastifyReply) {
    await this.proxy.handle(request, response)
  }
}
