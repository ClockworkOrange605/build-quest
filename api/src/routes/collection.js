import { Router } from 'express'

import { list, show }
  from '../controllers/collection.js'

const router = new Router()

router.get('/', list)
router.get('/:id', show)

export default router