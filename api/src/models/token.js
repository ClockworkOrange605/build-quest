import { db } from '../db.js'
import { ObjectId } from 'mongodb'

const dbCollection = db.collection('tokens')

const create =
  async (data) => {
    const query = await dbCollection.insertOne(data)
    return query.insertedId.toString()
  }

const findByID =
  (id) =>
    dbCollection.findOne(ObjectId(id))

const findByCollectionID =
  (collectionId) =>
    dbCollection
      .find({ collection_id: collectionId })
      .toArray()

export { create, findByID, findByCollectionID }