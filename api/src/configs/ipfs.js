export default {
  piniata: {
    uri: 'https://api.pinata.cloud',
    jwt: process.env.PINIATA_JWT || 'undefined',
    key: process.env.PINIATA_API_KEY || 'undefined',
    secret: process.env.PINIATA_API_SECRET || 'undefined'
  }
}