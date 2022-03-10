import { findByID as findCollection } from '../../models/collection.js'
import { create, findByCollectionID } from '../../models/token.js'
import { uploadFile, uploadJSON } from '../../utils/ipfs.js'

const createToken =
  async (req, res, next) => {
    const { account } = res.locals
    const { id } = req.params
    const { image, ...data } = req.body

    try {
      const collection = await findCollection(id)

      if (collection?.address === account) {
        const imageHash = await uploadFile('/storage/app/drops.png')
        const metadata = { image: `ipfs://${imageHash}`, ...data }

        const metadataHash = await uploadJSON(metadata)
        const tokenId = await create({
          collection_id: id,
          ipfs_hash: metadataHash,
          metadata
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