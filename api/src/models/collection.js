import { dbs as config } from '../configs/app.js'

import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient(config.mongo.uri)
const collection = client.db('drops')
  .collection('collections')

const create =
  async (data) => {
    await client.connect()
    const query = await collection.insertOne(data)
    await client.close()
    return query.insertedId.toString()
  }

const findByID =
  async (id) => {
    await client.connect()
    const query = await collection.findOne(ObjectId(id))
    await client.close()
    return query
  }

const findByAddress =
  async (address) => {
    await client.connect()
    const collections = await collection.find({ address }).toArray()
    await client.close()
    return collections
  }

export { create, findByID, findByAddress }