import express from 'express'

const PORT = process.env.API_PORT || 4000

const app = express()

app.get('/', (req, res) => {
  res.send({ timestamp: Date.now() })
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})