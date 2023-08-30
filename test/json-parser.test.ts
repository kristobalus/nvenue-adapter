
import * as fs from "fs"
import Parser = require("jsonparse")
import async from "async"

describe(`JsonParser`, function() {
    this.timeout(3_600_000)
    it(`should parse stream of push events`, async () => {

        const queue = async.queue((event, cb) => {
            console.log(JSON.stringify(event, null, 4))
            setTimeout(() => {
                cb()
            }, 1000)
        }, 1)

        const parser = new Parser()
        parser.onValue = function(event) {
            if ( this.key == null ) {
                queue.push(event)
            }
        }

        const pushEvents = fs.readFileSync("data/NBA_v7_Push_Events_Example.json")
        parser.write(pushEvents.toString())

        await queue.drain()
    })
})


