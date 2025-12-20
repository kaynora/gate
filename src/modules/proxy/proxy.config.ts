interface ProxyRoute {
  path: string
  target: string
}

export type ProxyRoutes = ProxyRoute[]

export const MOCK_CONFIG: ProxyRoutes = [
  { path: '/api/mock', target: 'http://localhost:4001' }
]
