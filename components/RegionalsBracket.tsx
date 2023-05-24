'use client';
import React from 'react';
import axios from 'axios';
import Game from './Game';
import { useState, useEffect } from 'react';

export default function Day(props) {
	const [games, setGames] = useState([]);

	function getAllGames() {
		axios
		.get('https://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard?limit=1000&dates=20230519-20230522')
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

	function getVenueGames() {

	}


	useEffect(() => {
		getAllGames();
	}, []);

	return (
		<section className="mx-auto">
			{games.length && <div className="flex container gap-3 items-center">
				<div className="flex flex-wrap gap-3 w-1/4">
					<Game key="0" game={games[0]} description="Opening Round"/>
					<Game key="1" game={games[1]} description="Opening Round"/>
					<Game key="3" game={games[3]} description="Elimination Game"/>
				</div>
				<div className="flex flex-wrap gap-3 w-1/4 h-fit">
					<Game key="2" game={games[2]} description="Winner's Bracket"/>
					<Game key="4" game={games[4]} description="Elimination Game"/>
				</div>
				<div className="flex w-1/4 h-fit">
					<div className="w-full"> <Game key="5" game={games[5]} description="Regional Final"/></div>
				</div>
				<div className="flex w-1/4 h-fit">
					{games[6] && <div className="w-full"> <Game key="6" game={games[6]} description="Regional Final - If Necessary"/></div>}
				</div>
			</div>}
		</section>
	)
}