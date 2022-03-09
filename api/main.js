import config from './src/configs/app.js'

import express from 'express'

import AuthRouter from './src/routes/auth.js'

const app = express()

app.use(express.json())

app.use('/auth', AuthRouter)

app.get('/', (req, res) => res.send({ timestamp: Date.now() }))

app.listen(config.port, () => {
  console.log(`API running at http://localhost:${config.port}`)
})