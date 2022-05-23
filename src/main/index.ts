import { Router } from 'express'
import PlansRouter from './plans'

const router = Router()

router.use('/plans', PlansRouter)

export default router
