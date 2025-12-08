import { FastifyReply, FastifyRequest } from "fastify";

const ROUTES = [
  { prefix: 'service1', target: 'http://localhost:4001' },
  { prefix: 'service2', target: 'http://localhost:4002' },
]

export class ProxyService {
  async handle (req: FastifyRequest, res: FastifyReply) {
    console.log(req)
  }
}
