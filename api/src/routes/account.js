import { Router } from 'express'

import { authMiddleware } from '../middlewares/auth.js'
import { createCollection, getCollection, getCollections, updateCollection, deployCollection }
  from '../controllers/account/collection.js'
import { createToken, getTokens }
  from '../controllers/account/tokens.js'

const router = new Router()

router.get('/:address/collections', authMiddleware, getCollections)
router.get('/:address/collections/:id', authMiddleware, getCollection)
router.post('/:address/collections/create', authMiddleware, createCollection)
router.post('/:address/collections/:id/update', authMiddleware, updateCollection)
router.post('/:address/collections/:id/deploy', authMiddleware, deployCollection)

router.get('/:address/collections/:id/tokens', authMiddleware, getTokens)
router.post('/:address/collections/:id/tokens/create', authMiddleware, createToken)

export default router