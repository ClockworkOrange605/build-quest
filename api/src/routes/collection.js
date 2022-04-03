import { Router } from 'express'

import { list, show, stats, mint }
  from '../controllers/collection.js'

const router = new Router()

router.get('/', list)
router.get('/:id', show)
router.get('/:id/stats', stats)
router.post('/:id/mint', mint)

export default router