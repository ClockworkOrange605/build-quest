import { web3 } from '../rpc.js'

import { findByID } from '../models/collection.js'
import { getContractStats, getContractMintTransaction, getContractMintPrice } from '../utils/contracts.js'

const list =
  async (req, res, next) => {
    res.status(501).send()
  }

const show =
  async (req, res, next) => {
    const { id } = req.params

    try {
      const collection = await findByID(id)

      const tx = await web3.eth.getTransactionReceipt(collection.contract.tx)

      collection.contract.address = tx.contractAddress

      const price = await getContractMintPrice(
        collection.contract.source,
        collection.contract.address
      )

      collection.contract.currentPrice = price

      res.send(
        collection
      )
    }
    catch (err) {
      next(err)
    }
  }

const stats =
  async (req, res, next) => {
    const { id } = req.params

    try {
      const collection = await findByID(id)

      const tx = await web3.eth.getTransactionReceipt(collection.contract.tx)
      collection.contract.address = tx.contractAddress

      const stats = await getContractStats(
        collection.contract.source,
        collection.contract.address
      )

      res.send({
        address: tx.contractAddress,
        stats
      })
    }
    catch (err) {
      next(err)
    }
  }

const mint =
  async (req, res, next) => {
    const { id } = req.params

    try {
      const collection = await findByID(id)

      const tx = await web3.eth.getTransactionReceipt(collection.contract.tx)
      collection.contract.address = tx.contractAddress

      const contract = collection.contract.address
      const token = 'test'

      const { transaction, gas, price } = await getContractMintTransaction(collection.contract.source, contract, token)

      res.send({ debug: true, price, gas, txData: transaction })
    } catch (err) {
      next(err)
    }
  }

export { list, show, stats, mint }