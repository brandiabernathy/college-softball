'use client';
import React from 'react';
import axios from 'axios';
import Game from './Game';
import { useState, useEffect } from 'react';

export default function Day(props) {
	const [games, setGames] = useState([]);

	function getGames() {
		axios
		.get('https://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard?limit=1000&dates=20230525-20230528')
		.then(response => {
			setGames(response.data.events
				.filter(game => game.competitions[0].venue.id == props.venue)
				.sort((a, b) => a.date < b.date ? -1 : 1)
				.map(game => ({
					id: game.id,
					date: game.date,
					status: game.status,
					home: game.competitions[0].competitors[0],
					away: game.competitions[0].competitors[1],
					home_rank: game.competitions[0].competitors[0].curatedRank,
					away_rank: game.competitions[0].competitors[1].curatedRank,
					description: game.competitions[0].notes[0].headline.substring(game.competitions[0].notes[0].headline.indexOf("-") + 1),
					broadcast: game.competitions[0].broadcasts[0].names[0],
					location: game.competitions[0].venue.address.city.replace(/\s+/g, '-').toLowerCase(),
			})));
		})
	}


	useEffect(() => {
		getGames();
	}, []);

	return (
		<section>
			{games.length && <div className="grid grid-cols-4 gap-8">
				<Game key="0" game={games[0]} description="Game 1"/>
				<Game key="1" game={games[1]} description="Game 2"/>
				{games[2] && <div className="w-full"> <Game key="2" game={games[2]} description="Game 3 - If Necessary"/></div>}
			</div>}
		</section>
	)
}