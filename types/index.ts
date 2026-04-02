
export interface Game {
    id: number;
    home: Competitor;
    away: Competitor;
    broadcast: string;
    date: string;
    venue: Venue;
    season: {
        slug: string;
        type: number;
    }
}

export interface Competitor {
    id: number;
    score: number;
    winner: boolean;
    team: Team;
}

export interface Team {
    abbreviation: string;
    color: string;
    id: number;
    location: string;
    logo: string;
    shortDisplayName: string;
}

export interface Venue {
    id: number;
    address: {
        city: string;
        state: string;
    }
}



// ------ below this line is old

export interface SingleGame {
    pathname?: string,
    description?: string,
    game: {
        id: number,
        time?: string,
        home_rank: number,
        away_rank: number,
        home: {
            score: number,
            winner: boolean,
            team: {
                location: string,
                logo: string,
                shortDisplayName: string,
            },
            curatedRank: {
                current: number
            }
        },
        away: {
            score: number,
            winner: boolean,
            team: {
                location: string,
                logo: string,
                shortDisplayName: string,
            },
            curatedRank: {
                current: number,
            }
        },
        status: {
            type: {
                completed: boolean,
                description: string,
                shortDetail: string,
            }
        }
        broadcast: string,
        venue: number,
        location: string,
    }
}

export interface Games {
    games: Game[],
    venue?: string;
    name?: string;
}

export interface Bracket {
    venue: string;
}