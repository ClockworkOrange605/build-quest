import { auth as config } from '../configs/app.js'

import ethSigUtils from 'eth-sig-util'
import jwt from 'jsonwebtoken'

const recoverAddress =
  (message, signature) =>
    ethSigUtils.recoverPersonalSignature({ data: message, sig: signature })

const signToken =
  (address, signature) => jwt.sign({ account: address, signature }, config.salt)

const verifyToken =
  (token) => (jwt.verify(token, config.salt)).account

export { signToken, verifyToken, recoverAddress }