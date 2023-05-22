import React from 'react';
import axios from 'axios';
import Game from './Game';
import { useState, useEffect } from 'react';

export default function Day(props) {
	const [games, setGames] = useState([]);

	function getGames() {
		axios
		.get('https://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard?limit=1000&dates=' + props.date)
		.then(response => {
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
					broadcast: game.competitions[0].broadcasts[0].names.join("/"),
					venue: game.competitions[0].venue.id,
					location: game.competitions[0].venue.address.city.replace(/\s+/g, '-').toLowerCase(),
				})));
			}
			else {
				setGames([]);
			}
		})
	}

	useEffect(() => {
		getGames();
	}, [props.date]);

	let events = games.map(item => {
		return <Game key={item.id} game={item} description={item.description}/>
	});

	return (
		<section className="grid grid-cols-4 gap-3 container mx-auto">
			{events && events}
		</section>
	)
}