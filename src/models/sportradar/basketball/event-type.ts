

export enum EventType {
    // Instant replay (challenge: <outcome>)
    ChallengeReview ="challengereview",
    // - <team name> challenge timeout
    ChallengeTimeout = "challengetimeout",
    // - <charged_to> clear path foul (<drawn_by> draws the foul)
    ClearPathFoul = "clearpathfoul",
    // <given_to> rebound (deadball)
    DeadBall = "deadball",
    //  - <charged_to> violation
    DefaultViolation = "defaultviolation",
    // - <charged_to> defensive goaltending violation
    DefensiveGoalTending = "defensivegoaltending",
    // - <charged_to> delay of game violation
    Delay = "delay",
    //  - <charged_to> double lane violation
    DoubleLane = "doublelane",
    // - <given_to> ejected from the game (<ejection_type>)
    Ejection = "ejection",

    /**
     * @description End of <nth period/half>
     */
    EndPeriod = "endperiod",

    // - <charged_to> flagrant 1 (<drawn_by> draws the foul)
    FlagrantOne = "flagrantone",

    // - <charged_to> flagrant 2 (<drawn_by> draws the foul)
    FlagrantTwo = "flagranttwo",

    // - <taken_by> makes <free_throw_type> free throw <attempt>
    FreeThrowMade = "freethrowmade",

    //  - <taken_by> misses <free_throw_type> free throw <attempt> (<charged_to> lane_violation)
    FreeThrowMiss = "freethrowmiss",

    /**
     * @description Jump ball <reason>. <possessor> vs <challenger> (<possession> gains possession)
     */
    JumpBall  = "jumpball",

    /**
     * @description <charged_to> jump ball violation
     */
    JumpBallViolation = "jumpballviolation",

    // <charged_to> kicked ball violation
    KickBall = "kickball",
    // <charged_to> lane violation
    Lane = "lane",
    // <team_name> lineup change (<players>)
    LineUpChange = "lineupchange",

    // <charged_to> offensive foul (<foul_type_desc>) (<drawn_by> draws the foul) officialtimeout - Official timeout
    OffensiveFoul = "offensivefoul",


    /**
     * @description An "open inbound" event in basketball refers to a situation
     *              where a team is inbounding the basketball from out of bounds.
     *              The term "open" might suggest that the player who is about to receive
     *              the inbound pass is not closely guarded or marked by a defender, therefore they are "open".
     *              The rules surrounding inbounding the ball can vary depending on the specific situation and the rules
     *              of the particular league:
     *              - After a made basket: The ball is inbounded from anywhere along the baseline.
     *              The inbounder can move along the baseline if the inbounding is after a made basket by the opponent.<br/
     *              - After a dead-ball turnover or at the start of a quarter: The ball is inbounded from the sideline,
     *              near the half-court line.<br/>
     *              - After a defensive rebound:
     *              The player who gets the rebound can directly put the ball into play without having to inbound it.
     *              - After a timeout: Depending on the rules, the team can choose to inbound the ball from
     *              the sideline or the baseline.</br>
     *              In all these situations, the objective is the same: to safely get the ball back
     *              in play and start the team's offensive possession.<br/>
     *              A successful open inbound pass can often set up effective offensive plays.
     *              - Open inbound <team_name>
     */
    OpenInbound = "openinbound",

    /**
     * @description The method used to begin each half of a basketball game
     *              (and overtime periods, if necessary).
     *              The referee will throw the ball straight up from the center of the court,
     *              and one player from each team will try to tap it to their teammates, hence the term "tip-off".<br/>
     *              This represents the start of the game or the start of the second half.
     *              <home> vs <away> (<possession> gains possession)
     */
    OpenTip = "opentip",

    // <charged_to> personal foul (<foul_type_desc>) (<drawn_by> draws the foul)
    PersonalFoul = "personalfoul",

    // <possession> gain possession
    Possession = "possession",

    // <given_to> <offensive/defensive> rebound
    // A rebound in basketball is an event that occurs after a shot attempt misses the basket
    // and the ball bounces off the backboard or rim.
    // When a player retrieves or gains possession of this ball after a missed shot, it's called a "rebound".
    Rebound = "rebound",

    // - Instant replay (request)
    RequestReview = "requestreview",
    // - Play review (<reason>, <outcome>)
    Review = "review",
    // <charged_to> shooting foul (<drawn_by> draws the foul)
    ShootingFoul = "shootingfoul",
    // Stoppage (<reason>)
    Stoppage = "stoppage",
    // <team_name> <duration> second timeout
    TeamTimeout = "teamtimeout",
    // <charged_to> technical foul (<foul_type_desc>)
    TechnicalFoul = "technicalfoul",
    // <taken_by> makes three point <shot_type_desc> <shot_type> (<assisted_by> assists) threepointmiss - <taken_by> misses three point <shot_type_desc> <shot_type> or <blocked_by> blocks <taken_by> three point <shot_type_desc> <shot_type>
    ThreePointMade = "threepointmade",
    // - <taken_by> misses three point <shot_type_desc> <shot_type> or <blocked_by> blocks <taken_by> three point <shot_type_desc> <shot_type>
    ThreePointMiss = "threepointmiss",
    // <charged_to> turnover (<turnover_type_desc>)(<stolen_by> steals)
    Turnover = "turnover",
    //  TV Timeout
    TVTimeout = "tvtimeout",
    // <taken_by> makes two point <shot_type_desc> <shot_type> (<assisted_by> assists) twopointmiss - <taken_by> misses two point <shot_type_desc> <shot_type> or <blocked_by> blocks <taken_by> two point <shot_type_desc> <shot_type>
    TwoPointMade = "twopointmade",
    // - <taken_by> misses two point <shot_type_desc> <shot_type> or <blocked_by> blocks <taken_by> two point <shot_type_desc> <shot_type>
    TwoPointMiss = "twopointmiss"
}
