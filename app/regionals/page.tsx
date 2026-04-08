'use client'

import { useState, useEffect } from 'react';
import { useAppSelector } from '../store';
import { Game } from '@/types';
import Day from '../../components/Day';
import Box from '../../components/VenueBox';
import dayjs from 'dayjs';
import { Button, Flex, Grid, Text } from '@mantine/core';

var utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

export default function Regionals() {
	// const { games } = useAppSelector(state => state.app);
	const [games, setGames] = useState([]);
	const [dayGames, setDayGames] = useState<Game[]>([]);
	const [selectedDate, setSelectedDate] = useState('');
	const [venueBoxes, setVenueBoxes] = useState([]);
	const [regionalDates, setRegionalDates] = useState<string[]>([]);
	const [regionalGames, setRegionalGames] = useState<Game[]>([]);

	// useEffect(() => {
	// 	console.log('gamessss', games)
	// 	setRegionalGames(games.filter(game => game.season.type === 3));
	// }, [games]);
	const currentYear = 2025;

		useEffect(() => {
			fetch(`https://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard?limit=1000&dates=${currentYear}0501-${currentYear}0630`)
			.then((res) => res.json())
				.then((data) => {
					setGames(data.events
						.filter((game) => game.season.type == '3')
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
		console.log('regional games', regionalGames);
		// if (regionalGames && regionalGames?.length > 0) {
		// 	setRegionalDates([...new Set(regionalGames.map(game => game.date))]);
		setRegionalDates([...new Set(games.map(game => game.date))]);

			// find all locations
		// let venues = regionalGames
		let venues = games
			.map((item) => ({
				location: item.location,
				id: item.venue,
				home_rank: item.home_rank
			}))
			.sort((a, b) => a.home_rank > b.home_rank ? 1 : -1);
			// .filter((v,i,a)=>a.findIndex(v2=>(v.location === v2.location))===i);

			console.log("venues", venues);
		let boxes = venues
			.map((venue, index)=> {
				return <Grid.Col key={venue.id} span={3}><Box venue={venue.id} games={games} name={venue.location}/></Grid.Col>
			});

		setVenueBoxes(boxes);
		// }
	// }, [regionalGames]);
	}, [games]);

	useEffect(() => {
		setRegionalDates([...new Set(games.map(game => game.date))]);
		// setRegionalDates([...new Set(regionalGames.map(game => game.date))]);

		// find all locations
		let venues = regionalGames
			.map((item) => ({
				location: item.location,
				id: item.venue,
				home_rank: item.home_rank
			}))
			.sort((a, b) => a.home_rank > b.home_rank ? 1 : -1)
			.filter((v,i,a)=>a.findIndex(v2=>(v.location === v2.location))===i);

		let boxes = venues
			.map((venue)=> {
				return <Box key={venue.id} venue={venue.id} games={games} name={venue.location}/>
			});

		setVenueBoxes(boxes);
	},[games]);

	function filterGames(date: string) {
		setSelectedDate (date);
		// setDayGames(regionalGames.filter(game => game['date'] == date));
		setDayGames(games.filter(game => game['date'] == date));
	}

	return (
		<>
			<Flex>
				<Button variant="transparent" onClick={() => filterGames('')}>All</Button>
				{regionalDates && regionalDates.map(date => {
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
