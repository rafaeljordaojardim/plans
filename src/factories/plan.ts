
import { CreatePlan } from '../domain/plan/use-cases'
import {  CreatePlanController } from '../presentation/controllers/location/createPlan'
import { IController } from '../presentation/interfaces/controller'

export const makeCreatePlan = (): IController => {
  const dbCreatePlan = new CreatePlan()
  return new CreatePlanController(dbCreatePlan)
}

// export const makeUpdateLocation = (): IController => {
//   const updateLocationRepo: IUpdateLocationRepo = new LocationPostgresRepo()
//   const dbUpdateLocation = new DBUpdateLocation(updateLocationRepo)
//   return new UpdateLocationController(dbUpdateLocation)
// }

// export const makeGetLocations = (): IController => {
//   const updateLocationRepo: IGetLocationRepo = new LocationPostgresRepo()
//   const dbUpdateLocation = new DBListLocation(updateLocationRepo)
//   return new ListLocationsController(dbUpdateLocation)
// }
