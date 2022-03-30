import config from './src/configs/app.js'

import express from 'express'

import CollectionRouter from './src/routes/collection.js'

import AuthRouter from './src/routes/auth.js'
import AccountRouter from './src/routes/account.js'

const app = express()

app.use(express.json())

app.use('/collections', CollectionRouter)

app.use('/auth', AuthRouter)
app.use('/account', AccountRouter)

app.get('/', (req, res) => res.send({ timestamp: Date.now() }))

app.listen(config.port, () => {
  console.log(`API running at http://localhost:${config.port}`)
})