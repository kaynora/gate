import express from 'express'

const app = express()

app.use(express.json())

app.all('/*splat', (req, res) => {
  res.set('x-upstream', 'service1')
  let body = ''
  req.on('data', (chunk) => body += chunk)
  req.on('end', () => {
    res.json({
      method: req.method,
      path: req.path,
      headers: req.headers,
      body: body || null,
      now: Date.now(),
    })
  })
})

app.listen(4001, () => console.log('Upstream 1 running on 4001'))
