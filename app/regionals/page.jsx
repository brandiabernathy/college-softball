'use client'
import Day from '../../components/Day';
import Box from '../../components/VenueBox';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

var utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

export default function Regionals() {
	const [games, setGames] = useState([]);
	const [dayGames, setDayGames] = useState([]);
	const [selectedDate, setSelectedDate] = useState('');
	const [venueBoxes, setVenueBoxes] = useState([]);

	const currentYear = dayjs().year();

	useEffect(() => {
		fetch(`https://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard?limit=1000&dates=${currentYear}0501-${currentYear}0615`)
			.then((res) => res.json())
			.then((data) => {
				console.log('data.events', data.events);
				setGames(data.events
					.filter((game) => game.season.type == '3' && game.name != 'TBD at TBD')
					.sort((a, b) => a.date < b.date ? -1 : 1)
					.map((game) => ({
						id: game.id,
						date: dayjs(game.date).format('YYYYMMDD'),
						time: dayjs(game.date).format('h:mmA'),
						status: game.status,
						home: game.competitions[0].competitors[0],
						away: game.competitions[0].competitors[1],
						home_rank: game.competitions[0].competitors[0].curatedRank ? game.competitions[0].competitors[0].curatedRank.current : 99,
						away_rank: game.competitions[0].competitors[1].curatedRank ? game.competitions[0].competitors[1].curatedRank.current : 99,
						description: game.competitions[0].notes[0].headline.substring(game.competitions[0].notes[0].headline.indexOf("-") + 1),
						broadcast: game.competitions[0].broadcasts.length ? game.competitions[0].broadcasts[0].names.join("/") : 'TBD',
						venue: game.competitions[0].venue.id,
						location: game.competitions[0].venue.address.city.replace(/\s+/g, '-').toLowerCase(),
				})));
			});
	}, []);

	useEffect(() => {
		console.log('gamesssss', games);
		// find all locations
		let venues = games
			.map((item) => ({
				location: item.location,
				id: item.venue,
				home_rank: item.home_rank
			}))
			.sort((a, b) => a.home_rank > b.home_rank ? 1 : -1)
			.filter((v,i,a)=>a.findIndex(v2=>(v.location === v2.location))===i)
			console.log('venues', venues);
		let boxes = venues
			// .sort((a, b) => a.home_rank - b.home_rank)
			.map((venue)=> {
				return <Box key={venue.id} venue={venue.id} games={games} name={venue.location}/>
			});

		setVenueBoxes(boxes);
	},[games]);

	function filterGames(date) {
		setSelectedDate (date);
		setDayGames(games.filter(game => game['date'] == date));
	}

	return (
		<>
			<div className="mb-5 text-xl">
				<span onClick={() => filterGames('')} className={"cursor-pointer " + (selectedDate == '' ? 'underline text-royal-blue' : '')}>All</span> |&nbsp;
				<span onClick={() => filterGames('20240517')} className={"cursor-pointer " + (selectedDate == '20240517' ? 'underline text-royal-blue' : '')}>Friday</span> |&nbsp;
				<span onClick={() => filterGames('20240518')} className={"cursor-pointer " + (selectedDate == '20240518' ? 'underline text-royal-blue' : '')}>Saturday</span> |&nbsp;
				<span onClick={() => filterGames('20240519')} className={"cursor-pointer " + (selectedDate == '20240519' ? 'underline text-royal-blue' : '')}>Sunday</span>
			</div>

			{selectedDate &&
				<Day games={dayGames} />
			}
			{!selectedDate &&
				<div className="grid min-[730px]:grid-cols-2 min-[1410px]:grid-cols-4 gap-3">
					{venueBoxes}
					{/* <Box venue="6207" games={games} name="Austin"/>
					<Box venue="4990" games={games} name="Norman"/>
					<Box venue="5000" games={games} name="Knoxville"/>
					<Box venue="4989" games={games} name="Gainesville"/>
					<Box venue="6206" games={games} name="Stillwater"/>
					<Box venue="4993" games={games} name="Los Angeles"/>
					<Box venue="6753" games={games} name="Columbia"/>
					<Box venue="6670" games={games} name="Stanford"/>
					<Box venue="4974" games={games} name="Baton Rouge"/>
					<Box venue="6519" games={games} name="Durham"/>
					<Box venue="4994" games={games} name="Athens"/>
					<Box venue="5229" games={games} name="Fayetteville"/>
					<Box venue="4997" games={games} name="Lafayette"/>
					<Box venue="4991" games={games} name="Tuscaloosa"/>
					<Box venue="4999" games={games} name="Tallahassee"/>
					<Box venue="5580" games={games} name="College Station"/> */}
				</div>
			}
		</>
	)
}
