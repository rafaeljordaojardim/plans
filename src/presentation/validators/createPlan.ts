import { Request, Response, NextFunction } from 'express'
import * as Joi from 'joi'

export function createPlanValidator (req: Request, res: Response, next: NextFunction): any {
  try {
    const schema = Joi.object({
      requester: Joi.number().required().error(new Error('requester is required')),
      responsible: Joi.number().required().error(new Error('responsible is required')),
      problem: Joi.string().required().error(new Error('problem is required')),
      startDate: Joi.string().required().error(new Error('startDate is required')),
      prevEndDate: Joi.string().required().error(new Error('prevEndDate is required')),
      sectorName: Joi.string().required().error(new Error('sectorName is required')),
      localName: Joi.string().required().error(new Error('localName is required')),
      finishedDate: Joi.string().optional(),
      acao: Joi.string().optional()
    })
    Joi.assert(req.body, schema)
    return next()
  } catch (error) {
    console.error(`Error create plan validator: ${String(error)}`)
    return res.status(400).json({ message: String(error) })
  }
}


