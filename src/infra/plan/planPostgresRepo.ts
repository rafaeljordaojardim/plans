import { PlanDb } from '../../db/models'
import { IUpdateLocationParams } from '../../domain/plan/use-cases'
import { Plan } from '../../entities/plan'
import { makeGetLocationQuery } from '../../utils/common'
import { LoggerThrow } from '../../utils/loggerThrow'

export class PlanPostgresRepo  {
  public async update (id: number, body: IUpdateLocationParams): Promise<Plan> {
    const [, [userUpdated]] = await PlanDb.update({ ...body }, {
      where: { id },
      returning: true
    })
    return Plan.convertFromDb(userUpdated)
  }

  public async get (id?: number): Promise<Plan | Plan[]> {
    const query = makeGetLocationQuery(id)
    if (id != null) {
      const location = await PlanDb.sequelize?.query(query)
      if (location?.[0][0] != null) {
        return Plan.convertFromDb(location[0][0])
      }
    } else {
      const locations = await PlanDb.sequelize?.query(query)
      if (locations != null) {
        return locations[0].map(Plan.convertFromDb)
      }
    }
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return (id != null) ? {} as Plan : [] as Plan[]
  }

  public async create (data: any): Promise<Plan> {
    const planCreated = await PlanDb.create({ ...data })
    if (planCreated == null) {
      LoggerThrow.error(`Could not create the plan`)
    }
    return Plan.convertFromDb(planCreated)
  }
}
