'use client'
import Day from '../../components/Day';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Box from '../../components/VenueBox';

var utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

export default function Supers() {
	const [games, setGames] = useState([]);
	const [dayGames, setDayGames] = useState([]);
	const [selectedDate, setSelectedDate] = useState('');
	const [venueBoxes, setVenueBoxes] = useState([]);
	const [superDates, setSuperDates] = useState();

	const currentYear = dayjs().year();

	useEffect(() => {
		fetch(`https://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard?limit=1000&dates=${currentYear}0501-${currentYear}0630`)
		.then((res) => res.json())
			.then((data) => {
				setGames(data.events
					.filter((game) => game.season.type == '4')
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
						broadcast: game.competitions[0].broadcasts.length ? game.competitions[0].broadcasts[0].names.join("/"): '',
						venue: game.competitions[0].venue.id,
						location: game.competitions[0].venue.address.city.replace(/\s+/g, '-').toLowerCase(),
					}))
				);
			});
	}, []);

	useEffect(() => {
		setSuperDates([...new Set(games.map(game => game.date))]);

		// find all locations
		let venues = games
			.map((item) => ({
				location: item.location,
				id: item.venue,
				home_rank: item.home_rank
			}))
			.filter(
				(obj, index) =>
				games.findIndex((item) => item.location === obj.location) === index
			)

		let boxes = venues
			.sort((a, b) => a.home_rank - b.home_rank)
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
				<span onClick={() => filterGames('')} className={"cursor-pointer " + (selectedDate == '' ? 'underline text-royal-blue' : '')}>All</span>
				{ superDates && superDates.map(date => {
					return (
						<>
							&nbsp;|&nbsp;
							<span onClick={() => filterGames(date)} className={"cursor-pointer " + (selectedDate == date ? 'underline text-royal-blue' : '')}>{dayjs(date).format('dddd')}</span>
						</>
					)
				})}
			</div>

			{selectedDate &&
				<Day games={dayGames} />
			}

			{!selectedDate &&
				<div className="grid min-[730px]:grid-cols-2 min-[1410px]:grid-cols-4 gap-3">
					{venueBoxes}
				</div>
			}
		</>
	)
}
