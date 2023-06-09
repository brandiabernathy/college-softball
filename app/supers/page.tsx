'use client'
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

	useEffect(() => {
		fetch('https://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard?limit=1000&dates=20230525-20230529')
			.then((res) => res.json())
			.then((data) => {
				setGames(data.events.map((game: any) => ({
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
			});
	}, []);

	console.log('games', games);

	function filterGames(date: string) {
		setSelectedDate (date);
		setDayGames(games.filter(game => game['date'] == date));
	}

	return (
		<>
			<div className="mb-5 text-xl">
				<span onClick={() => filterGames('')} className={"cursor-pointer " + (selectedDate == '' ? 'underline text-royal-blue' : '')}>All</span> |&nbsp;
				<span onClick={() => filterGames('20230525')} className={"cursor-pointer " + (selectedDate == '20230525' ? 'underline text-royal-blue' : '')}>Thursday</span> |&nbsp;
				<span onClick={() => filterGames('20230526')} className={"cursor-pointer " + (selectedDate == '20230526' ? 'underline text-royal-blue' : '')}>Friday</span> |&nbsp;
				<span onClick={() => filterGames('20230527')} className={"cursor-pointer " + (selectedDate == '20230527' ? 'underline text-royal-blue' : '')}>Saturday</span> |&nbsp;
				<span onClick={() => filterGames('20230528')} className={"cursor-pointer " + (selectedDate == '20230528' ? 'underline text-royal-blue' : '')}>Sunday</span>
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
		</>
	)
}
