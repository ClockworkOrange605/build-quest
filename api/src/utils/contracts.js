import fs from 'fs'

import { web3 } from '../rpc.js'

const getContactDeployTransaction = (contract, args) => {
  const { abi, bytecode } =
    JSON.parse(
      fs.readFileSync(`/storage/app/contracts/${contract}.json`)
    )

  const contractInstance = new web3.eth.Contract(abi)
  const transaction =
    contractInstance
      .deploy({ data: bytecode, arguments: args })
      .encodeABI()

  return transaction
}

export { getContactDeployTransaction }