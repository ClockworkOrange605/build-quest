import { web3 } from '../../rpc.js'

import { getContactDeployTransaction } from '../../utils/contracts.js'
import { create, update, findByID, findByAddress } from '../../models/collection.js'

const createCollection =
  async (req, res, next) => {
    const { account } = res.locals
    const { ...data } = req.body

    try {
      const collectionId = await create({
        address: account,
        ...data
      })

      res.send({ id: collectionId })
    }
    catch (err) {
      next(err)
    }
  }

const deployCollection =
  async (req, res, next) => {
    const { account } = res.locals
    const { id } = req.params
    const { name, symbol, targetTimeBetweenMints: n, startingPrice: price } = req.body

    try {
      const collection = await findByID(id)

      if (collection?.address === account) {
        // console.log(web3.utils.toWei(price, "ether"))
        // console.log(name, symbol, n*n, price)
        const transaction = getContactDeployTransaction('CRISP', [name, symbol, n, n * n, 1, n * n, web3.utils.toWei(price, "ether")])
        await update(id, { contract: { source: 'CRISP', constructor: [name, symbol, n, price] } })

        res.send({ tx: transaction })
      }
      else
        res.status(403).send({ error: '403 Forbidden' })
    }
    catch (err) {
      next(err)
    }
  }

const getCollection =
  async (req, res, next) => {
    const { account } = res.locals
    const { id } = req.params

    try {
      const collection = await findByID(id)

      if (collection?.address === account)
        res.send(collection)
      else
        res.status(403).send({ error: '403 Forbidden' })
    }
    catch (err) {
      next(err)
    }
  }

const getCollections =
  async (req, res, next) => {
    const { account } = res.locals

    try {
      const collections = await findByAddress(account)
      res.send(collections)
    }
    catch (err) {
      next(err)
    }
  }

export {
  getCollection,
  getCollections,
  createCollection,
  deployCollection
}