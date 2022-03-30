import { findByID } from '../models/collection.js'

const list =
  async (req, res, next) => {
    res.status(501).send()
  }

const show =
  async (req, res, next) => {
    const { id } = req.params

    try {
      const collection = await findByID(id)
      res.send(collection)
    }
    catch (err) {
      next(err)
    }
  }

export { list, show }