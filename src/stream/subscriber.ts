// noinspection JSUnusedGlobalSymbols

import axios, { AxiosResponse } from 'axios';
import { EventEmitter, Readable } from 'stream';
import { Logger } from "pino"

import { Defer } from './defer';

const Parser = require("jsonparse");

export class Subscriber extends EventEmitter {

    private jsonParser
    private looped: boolean = true
    private readable?: Readable

    constructor(
        private log: Logger,
        private options: {
            apiUrl: string,
            apiKey: string,
            reconnectTimeout: number,
        }
    ) {
        super()
        const emitter = this
        this.jsonParser = new Parser()
        this.jsonParser.onError = (err: Error) => {
            this.log.error(err, 'error occurred while JSON stream parsing')
        }
        this.jsonParser.onValue = function (value) {
            // noinspection JSPotentiallyInvalidUsageOfClassThis
            if (this.key == null) {
                try {
                    emitter.emit("data", value)
                } catch (err){
                    emitter.emit("error", err)
                }
            }
        }
    }


    private backoff(delay: number) {
        return new Promise((r) => setTimeout(r, delay))
    }

    private async connect() {

        const deferred = new Defer()

        const response: AxiosResponse = await axios.get(this.options.apiUrl, {
            responseType: 'stream',
            params: {
                key: this.options.apiKey
            }
        })
        this.readable = Readable.from(response.data as NodeJS.ReadableStream)
        this.readable.on('data', (chunk: Buffer) => {
            if (chunk) {
                this.jsonParser.write(chunk)
            }
        })
        this.readable.on("close", () => {
            this.log.debug("connection closed")
            deferred.resolve()
        })
        this.readable.on("error", (error: Error) => {
            this.log.error(error)
        })

        return deferred.promise
    }

    async start() {
        this.looped = true
        while (this.looped) {
            try {
                await this.connect()
            } catch (err) {
                this.log.fatal(err)
            }
            if (this.looped)
                await this.backoff(this.options.reconnectTimeout)
        }
    }

    stop() {
        this.looped = false
        this.readable?.destroy()
    }

    pause() {
        this.readable?.pause()
    }

    resume() {
        this.readable?.resume()
    }

}




