import { FastifyReply, FastifyRequest } from 'fastify'
import { MOCK_CONFIG } from './proxy.config'

export class ProxyService {
  async handle (req: FastifyRequest, res: FastifyReply) {
    const route = MOCK_CONFIG.find(r => req.url.startsWith(r.path))

    if (!route) {
      res.status(404).send({ error: 'Route not found' })
      return
    }

    const upstreamHeaders: HeadersInit = Object.fromEntries(
      Object.entries(req.headers).map(([key, value]) => [key, String(value)])
    )

    const response = await fetch(route.target + req.url, {
      method: req.method,
      headers: upstreamHeaders,
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined
    })

    const data = await response.json()
    res.status(response.status).send(data)
  }
}
