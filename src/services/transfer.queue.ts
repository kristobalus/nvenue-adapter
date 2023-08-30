import async, { QueueObject } from "async";
import { AdapterEvent } from "../models/triggers/adapter-event";
import { Logger } from "pino";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import crypto = require("crypto");

export interface Options {
    times: number
    interval: number
    url: string
    accessToken: string
    secret: string
}

export class TransferQueue {

    private queue: QueueObject<AdapterEvent>

    constructor(
        private log: Logger,
        private options: Options
    ) {
        this.queue = async.queue((event: AdapterEvent, next) => {
            this.log.debug(event, "submitting adapter event")
            async.retry({
                ...options,
                errorFilter: function(err: AxiosError) {
                    if (err.isAxiosError) {
                        // do not retry in case authentication failure
                        if ( err.status == 401 ) {
                            return false
                        }
                    }
                    return true
                }
            }, (done) => {
                this.send(event)
                    .then(() => done())
                    .catch(err => done(err))
            }, (err, result) => {
                if (err) {
                    this.log.fatal({ err }, `retry failed`)
                }
                next(err)
            });
        }, 1)
    }

    push(events: AdapterEvent[]) {
        for(const event of events) {
            this.queue.push(event, () => {})
        }
    }



    private async send(event: AdapterEvent)  {

        const requestBody = JSON.stringify({ event })
        const signature = crypto.createHmac("sha256", this.options.secret)
            .update(requestBody)
            .digest('base64');

        const config: AxiosRequestConfig = {
            method: 'post',
            url: this.options.url,
            data: requestBody,
            headers: {
                "x-access-token": this.options.accessToken,
                "x-signature": signature,
                'content-Type': 'application/json'
            }
        }

        this.log.debug({ config }, 'sending push event')

        const response = await axios(config)

        if ( response.status !== 200 ) {
            throw new Error("Http error while pushing event into sl-triggers")
        }
    }


}
