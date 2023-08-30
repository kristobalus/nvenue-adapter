import { Game } from "./game";
import { Event } from "./event";
import { Metadata } from "./metadata";

export interface Payload {
    game: Game,
    event: Event
}

export interface PushData {
    heartbeat: any,
    payload: Payload,
    locale: string,
    metadata: Metadata
}


