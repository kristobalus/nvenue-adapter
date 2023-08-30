
export enum PeriodType {
    Quarter = "quarter",
    Overtime = "overtime"
}

export interface Period {
    id: string
    number: number
    sequence: number
    type: PeriodType
}
