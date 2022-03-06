import { Router } from 'express'

import { authMiddleware } from '../middlewares/auth.js'
import { getToken, checkToken } from '../controllers/auth.js'

const router = new Router()

router.post('/:address', authMiddleware, getToken)
router.get('/:address/check', authMiddleware, checkToken)

export default router