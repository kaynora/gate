import { NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { ProxyModule } from './modules/proxy/proxy.module'
import fastifyHelmet from '@fastify/helmet'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    ProxyModule,
    new FastifyAdapter({ logger: true }),
  )

  await app.register(fastifyHelmet)
  await app.listen(3000, '0.0.0.0')
  console.log('Gate running on 3000')
}

bootstrap()
