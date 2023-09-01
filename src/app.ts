import pino, { Logger, LoggerOptions } from "pino"

import { PushData } from "./models/sportradar/basketball/push-data";

import { Subscriber } from "./stream/subscriber"
import { writeFileSync, appendFileSync } from "fs";
require('dotenv').config()

const log = pino({
    transport: {
        target: 'pino-pretty'
    },
    name: "nvenue",
    level: "debug"
} as LoggerOptions) as Logger

const subscriber = new Subscriber(log, {
        reconnectTimeout: 1000,
        apiUrl: 'https://data.nextplay.live/api/mlb/v1.1/betting/games/stream',
        apiKey: process.env.API_KEY
    })

subscriber
    .on("data", (data) => {
        log.debug(data, "raw data received")
        appendFileSync("log2.json", JSON.stringify(data, null, 2))
    })
    .on("error", (err) => {
        log.error(err, 'error occurred while reading basketball stream')
    })
    .start()
