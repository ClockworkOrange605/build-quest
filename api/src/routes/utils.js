import { Router } from 'express'

import { upload } from '../controllers/utils.js'

const router = new Router()

router.post('/upload', upload)

export default router