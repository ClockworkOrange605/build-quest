import { dbs as config } from './configs/app.js'

import { MongoClient } from 'mongodb'

const client = new MongoClient(config.mongo.uri)

const connection = await client.connect()

const db = client.db(config.mongo.db)

export { db, connection, client }