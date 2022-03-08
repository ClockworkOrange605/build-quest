import auth from './auth.js'

export default {
  port: process.env.API_PORT || 4000,
  auth
}

export { auth }