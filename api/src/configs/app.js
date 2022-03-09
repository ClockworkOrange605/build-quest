import auth from './auth.js'
import dbs from './dbs.js'
import rpc from './rpc.js'

export default {
  port: process.env.API_PORT || 4000,
  auth, dbs, rpc
}

export { auth, dbs, rpc }