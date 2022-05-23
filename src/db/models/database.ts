import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { PlanDb } from '.'
import database from '../config/database'

const models = [
  PlanDb
]

export const init = (): Sequelize => {
  const sequelize = new Sequelize(database as SequelizeOptions)
  sequelize.addModels([...models])
  return sequelize
}
