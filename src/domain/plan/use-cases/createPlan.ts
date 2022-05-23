import { Plan } from '../../../entities/plan';
import { PlanPostgresRepo } from '../../../infra/plan/planPostgresRepo';

export interface ICreatePlan {
  create: (data: any) => Promise<Plan>
}



export class CreatePlan implements ICreatePlan {

  constructor(private planPostgresRepo = new PlanPostgresRepo()) {}
  public async create (data: any): Promise<Plan> {
    const plan = await this.planPostgresRepo.create({ ...data })
    return plan
  }  
}
