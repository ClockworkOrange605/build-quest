import { db } from '../db.js'
import { ObjectId } from 'mongodb'

const collection = db.collection('collections')

const create =
  async (data) => {
    const query = await collection.insertOne(data)
    return query.insertedId.toString()
  }

const update =
  async (id, data) => {
    const query = await collection.updateOne(
      { _id: ObjectId(id) },
      { $set: { ...data } }
    )
    return query.acknowledged
  }

const findByID =
  async (id) =>
    await collection.findOne(ObjectId(id))

const findByAddress =
  async (address) =>
    await collection.find({ address }).toArray()

export { create, update, findByID, findByAddress }