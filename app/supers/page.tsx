'use client'
import React from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Day from '../../components/Day';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Box from '../../components/VenueBox';

var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

export default function Supers() {
	const [games, setGames] = useState([]);
	const [dayGames, setDayGames] = useState([]);
	const [selectedDate, setSelectedDate] = useState('');

	function getGames() {
		axios
		.get('https://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard?limit=1000&dates=20230525-20230528')
		.then(response => {
			if(response.data.events.length) {
				setGames(response.data.events.map(game => ({
					id: game.id,
					date: dayjs(game.date).format('YYYYMMDD'),
					time: dayjs(game.date).format('ha dd'),
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
	}, []);

	function filterGames(date: string) {
		setSelectedDate (date);
		setDayGames(games.filter(game => game['date'] == date));
	}

	return (
		<main className="bg-slate-100 py-5">
			<section className="container max-w-8xl">
				<div className="mb-5 text-xl">
					<span onClick={() => filterGames('20230525')} className={"cursor-pointer " + (selectedDate == '20230525' ? 'underline text-blue-900' : '')}>Thursday</span> |&nbsp;
					<span onClick={() => filterGames('20230526')} className={"cursor-pointer " + (selectedDate == '20230526' ? 'underline text-blue-900' : '')}>Friday</span> |&nbsp;
					<span onClick={() => filterGames('20230527')} className={"cursor-pointer " + (selectedDate == '20230527' ? 'underline text-blue-900' : '')}>Saturday</span> |&nbsp;
					<span onClick={() => filterGames('20230528')} className={"cursor-pointer " + (selectedDate == '20230528' ? 'underline text-blue-900' : '')}>Sunday</span>
				</div>

				{selectedDate &&
					<Day games={dayGames} />
				}

				{!selectedDate &&
					<div className="grid min-[730px]:grid-cols-2 min-[1410px]:grid-cols-4 gap-3">
						<Box venue="4990" games={games} name="Norman"/>
						<Box venue="6519" games={games} name="Durham"/>
						<Box venue="4991" games={games} name="Tuscaloosa"/>
						<Box venue="5000" games={games} name="Knoxville"/>
						<Box venue="4999" games={games} name="Tallahassee"/>
						<Box venue="6206" games={games} name="Stillwater"/>
						<Box venue="5262" games={games} name="Seattle"/>
						<Box venue="5399" games={games} name="Salt Lake City"/>
					</div>
				}
			</section>
		</main>
	)
}
