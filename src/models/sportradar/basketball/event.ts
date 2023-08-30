import { Team } from "./team"
import { Player } from "./player"
import { ShotType } from "./shot-type";
import { StatType } from "./stat-type";
import { EventType } from "./event-type";
import { Qualifier } from "./qualifier";

// export interface Attribution {
//   name: string
//   market: string
//   reference: string
//   id: string
//   sr_id: string
// }

export interface Period {
  id: string
  number: number
  sequence: number
  type: string
}

export type EventPlayer = Pick<Player, "full_name" | "jersey_number" | "reference" | "id" | "sr_id">
export type EventTeam = Pick<Team, "name" | "market" | "reference" | "id" | "sr_id">

export interface Court {
  home: Team
  away: Team
}

export interface Location {
  coord_x: number
  coord_y: number
  action_area: "underbasket" | string
}

export interface Possession {
  /**
   * @description player's name
   */
  name: string

  /**
   * @description player team's name
   */
  market: string

  /**
   * @description player's id
   */
  id: string
}

export interface Statistics {
  type: StatType
  made: boolean
  shot_type: ShotType
  shot_type_desc: "driving" | string
  shot_distance: number
  // TODO find out what does these points refer to?
  //  Is it points for event or a total sum over the game?
  points: number
  team: Pick<Team, "name" | "market" | "reference" | "id">
  player: Pick<Player, "full_name" | "jersey_number" | "reference" | "id">
}


export interface Event {
  id: string
  event_type: EventType
  number: number
  sequence: number
  clock: string
  clock_decimal: string
  // ISO8601
  updated: string
  // ISO8601
  wall_clock: string
  created: string
  description: string
  home_points: number
  away_points: number
  attribution: any,
  period: Period,
  on_court: Court
  qualifiers: Qualifier[]
  location: Location
  possession: Possession
  statistics: Statistics[]
}
