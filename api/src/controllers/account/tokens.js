import { findByID as findCollection } from '../../models/collection.js'
import { create, findByCollectionID } from '../../models/token.js'

const createToken =
  async (req, res, next) => {
    const { account } = res.locals
    const { id } = req.params
    const { ...data } = req.body

    try {
      const collection = await findCollection(id)

      if (collection?.address === account) {
        const tokenId = await create({
          collection_id: id,
          ...data
        })

        res.send({ id: tokenId })
      }
      else
        res.status(403).send({ error: '403 Forbidden' })
    }
    catch (err) {
      next(err)
    }
  }

const getTokens =
  async (req, res, next) => {
    const { account } = res.locals
    const { id } = req.params

    try {
      const collection = await findCollection(id)

      if (collection.address === account) {
        const tokens = await findByCollectionID(id)
        res.send(tokens)
      }
      else
        res.status(403).send({ error: '403 Forbidden' })
    }
    catch (err) {
      next(err)
    }
  }

export { createToken, getTokens }