import fs from 'fs'

import { web3 } from '../rpc.js'

const getContractStats =
  async (contract, address) => {
    const { abi, bytecode } =
      JSON.parse(
        fs.readFileSync(`/storage/app/contracts/${contract}.json`)
      )

    const contractInstance = new web3.eth.Contract(abi, address)

    const transfers = await contractInstance.getPastEvents('Transfer', {
      fromBlock: 0
    })

    const mintTxs = transfers
      .filter(event =>
        event.returnValues.from == "0x0000000000000000000000000000000000000000")
      .map(async (event) => {
        return {
          event,
          tx: await web3.eth.getTransaction(event.transactionHash),
          block: await web3.eth.getBlock(event.blockNumber)
        }
      })

    const stats = (await Promise.all(mintTxs)).map(item => {

      return {
        price: web3.utils.fromWei(item.tx.value),
        time: item.block.timestamp
      }
    })

    return {
      transfers,
      graph: stats
    }
  }

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

const getContractMintTransaction = async (contract, address, token) => {
  const { abi, bytecode } =
    JSON.parse(
      fs.readFileSync(`/storage/app/contracts/${contract}.json`)
    )

  const contractInstance = new web3.eth.Contract(abi, address)

  const price = await
    contractInstance.methods.getPrice().call()

  const transaction = await
    contractInstance.methods.mint(token).encodeABI()

  const transactionGas = await
    contractInstance.methods.mint(token).estimateGas({ from: '0x46d8d46aa014e7c4a2d99b68f51f86140a307459', value: price })

  console.log(price, transactionGas)

  return { transaction, gas: transactionGas, price: web3.utils.numberToHex(price) }
}

const getContractMintPrice = async (contract, address) => {
  const { abi, bytecode } =
    JSON.parse(
      fs.readFileSync(`/storage/app/contracts/${contract}.json`)
    )

  const contractInstance = new web3.eth.Contract(abi, address)

  const price = await
    contractInstance.methods.getPrice().call()

  return web3.utils.fromWei(price)
}

export { getContractStats, getContactDeployTransaction, getContractMintTransaction, getContractMintPrice }