'use client'
import Day from '../../components/Day';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Box from '../../components/VenueBox';
import { Button, Flex, Grid, Text } from '@mantine/core';

var utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

export default function Supers() {
	const [games, setGames] = useState([]);
	const [dayGames, setDayGames] = useState([]);
	const [selectedDate, setSelectedDate] = useState('');
	const [venueBoxes, setVenueBoxes] = useState([]);
	const [superDates, setSuperDates] = useState();

	// const currentYear = dayjs().year();
	const currentYear = 2025;

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
				return <Grid.Col key={venue.id} span={3}><Box venue={venue.id} games={games} name={venue.location}/></Grid.Col>
			});

		setVenueBoxes(boxes);
	},[games]);

	function filterGames(date) {
		setSelectedDate (date);
		setDayGames(games.filter(game => game['date'] == date));
	}

	return (
		<>
			<Flex>
				<Button variant="transparent" onClick={() => filterGames('')}>All</Button>
				{superDates && superDates.map(date => {
					return (
						<Flex key={date} align="center">
							<Text>|</Text>
							<Button variant="transparent" onClick={() => filterGames(date)} className={"cursor-pointer " + (selectedDate == date ? 'underline text-royal-blue' : '')}>{dayjs(date).format('dddd')}</Button>
						</Flex>
					)
				})}
			</Flex>

			{selectedDate &&
				<Day games={dayGames} />
			}

			{!selectedDate &&
				<Grid>{venueBoxes}</Grid>
			}
		</>
	)
}
