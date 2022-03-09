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
    const { name, symbol, ...data } = req.body

    try {
      const collection = await findByID(id)

      if (collection?.address === account) {
        const transaction = getContactDeployTransaction('CRISP', [name, symbol])
        await update(id, { contract: { source: 'CRISP', constructor: [name, symbol] } })

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