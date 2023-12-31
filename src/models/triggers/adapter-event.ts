
export interface AdapterEvent {
  // unique raw event identifier from datasource
  id: string
  // datasource
  datasource: string
  // scope of event
  scope: string
  // unique scope identifier
  scopeId: string
  // event timestamp
  timestamp: number
  // type of sport
  sport: string
  // event name -> event value
  options: Record<string, string | number>
}
