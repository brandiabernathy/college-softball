import React from 'react';
import axios from 'axios';
import Game from './Game';
import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

export default function Day(props) {
    const [games, setGames] = useState([]);

    useEffect(() => {
		axios
		.get('http://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard?limit=1000&dates=' + props.date)
		.then(response => {
            console.log('response', response);
            if(response.data.events.length) {
                setGames(response.data.events.map(game => ({
                    id: game.id,
                    date: game.date,
                    status: game.status,
                    home: game.competitions[0].competitors[0],
                    away: game.competitions[0].competitors[1],
                    home_rank: game.competitions[0].competitors[0].curatedRank,
                    away_rank: game.competitions[0].competitors[1].curatedRank,
                    description: game.competitions[0].notes[0].headline.substring(game.competitions[0].notes[0].headline.indexOf("-") + 1),
                    broadcast: game.competitions[0].broadcasts[0].names[0],
                    venue: game.competitions[0].venue.id,
                })));
            }
            else {
                setGames([]);
            }
		})
	}, [props.date]);

    console.log("games", games);

	let events = games.map(item => {
		return <Game key={item.id} game={item} description={item.description}/>
	});
    console.log("events", events);
	return (
        <section className="grid grid-cols-4 gap-3 container mx-auto">
            {events && events}
            {/* <span>No events</span> */}
        </section>
	)
}