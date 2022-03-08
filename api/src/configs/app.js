import auth from './auth.js'
import dbs from './dbs.js'

export default {
  port: process.env.API_PORT || 4000,
  auth, dbs
}

export { auth, dbs }