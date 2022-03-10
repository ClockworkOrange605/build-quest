import auth from './auth.js'
import dbs from './dbs.js'
import rpc from './rpc.js'
import ipfs from './ipfs.js'

export default {
  port: process.env.API_PORT || 4000,
  auth, dbs, rpc, ipfs
}

export { auth, dbs, rpc, ipfs }