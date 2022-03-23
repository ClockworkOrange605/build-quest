import { rpc as config } from './configs/app.js'

import Web3 from 'web3'

const web3 = new Web3(config.uri)

export { web3 }