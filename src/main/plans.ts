import { Router } from 'express'
import { makeCreatePlan } from '../factories/plan'
import { createPlanValidator } from '../presentation/validators'
import { authorizer } from '../utils/middleware/authorizer'

const router = Router()

router.post('/', authorizer, createPlanValidator, async (req, res, next) => {
  const response = await makeCreatePlan().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

// router.patch('/:id', authorizer, async (req, res, next) => {
//   const response = await makeUpdateLocation().handle(req, res)
//   res.statusCode = response.status
//   return res.json(response?.body)
// })

// router.get('/', authorizer, async (req, res, next) => {
//   const response = await makeGetLocations().handle(req, res)
//   res.statusCode = response.status
//   return res.json(response?.body)
// })

// router.get('/:id', authorizer, async (req, res, next) => {
//   const response = await makeGetLocations().handle(req, res)
//   res.statusCode = response.status
//   return res.json(response?.body)
// })

export default router
