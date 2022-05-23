import { Table, Column, Model } from 'sequelize-typescript'

@Table({ tableName: 'plans' })
export class PlanDb extends Model {

  @Column
  requester: number

  @Column
  responsible: number

  @Column
  problem: string

  @Column({ field: 'start_date' })
  startDate: Date

  @Column({ field: 'prev_end_date' })
  prevEndDate: Date

  @Column({ field: 'sector_name' })
  sectorName: string

  @Column({ field: 'local_name' })
  localName: string

  @Column({ field: 'finished_date' })
  finishedDate: number

  @Column
  acao: string

  @Column({ field: 'created_at' })
  createdAt: Date

  @Column({ field: 'updated_at' })
  updatedAt: Date

}
