import { recoverAddress, signToken, verifyToken } from '../utils/auth.js'

const authorize = (req, res, next) => {
  const { address } = req.params
  const { signature } = req.body

  const message = `${address}@drops`

  try {
    const account = recoverAddress(message, signature)

    if (account === address)
      res.send({ account, token: signToken(account, signature) })
    else
      res.status(403).send({ error: 'Invalid signature' })
  }
  catch (err) {
    next(err)
  }
}

const verify = (req, res, next) => {
  const { address } = req.params
  const { "x-auth-token": token } = req.headers

  try {
    const account = verifyToken(token)

    if (account === address) {
      res.locals.account = account
      next()
    }
    else
      res.status(403).send({ error: 'Invalid token' })
  }
  catch (err) {
    next(err)
  }
}

const check = (req, res) =>
  res.send({ account: res.locals.account })

export { authorize as getToken, check as checkToken, verify as verifyToken }