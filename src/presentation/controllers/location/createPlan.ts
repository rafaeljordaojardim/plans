import { created, serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { IResponse } from '../../interfaces/response'
import { Request, Response } from 'express'
import { ICreatePlan } from '../../../domain/plan/use-cases/createPlan'

export class CreatePlanController implements IController {
  constructor (private readonly createPlan: ICreatePlan) {}
  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const body = req.body
      const response = await this.createPlan.create(body)
      return created({ plan: response })
    } catch (error) {
      console.error(`Error creating plan: ${String(error)}`)
      return serverError()
    }
  }
}
