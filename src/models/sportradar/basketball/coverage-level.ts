

export enum CoverageLevel {
    // We provide live play-by-play coverage for the entire game.
    // We provide updated scores and time remaining as well as team- and player-level data in near real time.
    // Full coverage is available for all regular and postseason games.
    Full = "full",
    // We provide scores, time remaining, and team leaders (assists, points, and rebounds), in a timely manner, as the game progresses.
    // We provide team- and player-level data for the game within 30 minutes of the official results being posted.
    ExtendedBoxscore = "extended_boxscore"
}
