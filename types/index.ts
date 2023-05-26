
export interface Game {
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
            },
            curatedRank: {
                current: number,
            }
        },
        away: {
            score: number,
            winner: boolean,
            team: {
                location: string,
                logo: string,
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
    games: object[],
    venue?: string,
    name?: string,
}