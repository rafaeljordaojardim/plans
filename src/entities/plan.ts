/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export class Plan {
  public id?: number
  public requester: number
  public responsible: number
  public problem: string
  public startDate: Date
  public prevEndDate: Date
  public sectorName: string
  public localName: string
  public finishedDate: Date
  public acao: string

  public static convertFromDb (row: any): Plan {
    console.log(JSON.stringify(row));
    const plan = new Plan()
    plan.requester = row['requester'] ? row['requester'] : undefined
    plan.id = row['id'] ? row['id'] : undefined
    plan.responsible = row['responsible'] ? row['responsible'] : undefined
    plan.sectorName = row['sectorName'] ? row['sectorName'] : undefined
    plan.startDate = row['startDate'] ? row['startDate'] : undefined
    plan.prevEndDate = row['prevEndDate'] ? row['prevEndDate'] : undefined
    plan.localName = row['localName'] ? row['localName'] : undefined
    plan.finishedDate = row['finishedDate'] ? row['finishedDate'] : undefined
    plan.acao = row['acao'] ? row['acao'] : undefined
    plan.problem = row['problem'] ? row['problem'] : undefined
    return plan
  }
}
