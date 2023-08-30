
export enum GameStatus {
    // The game is scheduled to occur.
    Scheduled = "scheduled",
    // The game has been created, and we have begun logging information.
    Created = "created",
    // The game is in progress.
    InProgress = "inprogress",
    // The game is currently at halftime.
    HalfTime = "halftime",
    // The game is over, but stat validation is not complete.
    Complete = "complete",
    // The game is over and the stats have been validated.
    Closed = "closed",
    // The game has been cancelled. No makeup game will be played as a result.
    Cancelled = "cancelled",
    // The start of the game is currently delayed or the game has gone from in progress to delayed
    // for some reason.
    Delayed = "delayed",
    // The game has been postponed, to be made up at another day and time. Once the makeup game is announced, a new game and ID will be created and scheduled on the announced makeup date. You should request the scheduled feed(s) regularly to identify the re-scheduled makeup game(s). time-tbd – The game has been scheduled, but a time has yet to be announced.
    //     if-necessary – The game will be scheduled if it is required.
    Postponed = "postponed",
    // The series game was scheduled to occur, but will not take place due to one team
    // clinching the series early.
    Unnecessary = "unnecessary"
}
