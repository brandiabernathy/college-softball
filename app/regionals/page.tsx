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
	const { games } = useAppSelector(state => state.app);
	const [dayGames, setDayGames] = useState([]);
	const [selectedDate, setSelectedDate] = useState('');
	const [venueBoxes, setVenueBoxes] = useState([]);
	const [regionalDates, setRegionalDates] = useState<string[]>([]);
	const [regionalGames, setRegionalGames] = useState<Game[]>([]);

	useEffect(() => {
		setRegionalGames(games.filter(game => game.season.type === 3));
	}, [games]);

	useEffect(() => {
		if (regionalGames && regionalGames?.length > 0) {
			console.log('regional games', regionalGames);
			setRegionalDates([...new Set(regionalGames.map(game => game.date))]);

			// find all locations
		let venues = regionalGames
			.map((item) => ({
				location: item.venue.address.city,
				id: item.venue.id,
				address: {
					city: item.venue.address.city,
					state: item.venue.address.state
				},
				home_rank: item.home.curatedRank || 99
			}))
			.sort((a, b) => a.home_rank > b.home_rank ? 1 : -1)
			.filter((v,i,a)=>a.findIndex(v2=>(v.location === v2.location))===i);

			console.log("venues", venues);
		let boxes = venues
			.map((venue, index)=> {
				return <Grid.Col key={venue.id} span={3}><Box venue={venue} games={games} name={venue.location}/></Grid.Col>
			});

			console.log("boxes", boxes);

		setVenueBoxes(boxes);
		}
	}, [regionalGames]);

	function filterGames(date: string) {
		console.log("date", date);
		setSelectedDate(date);
		console.log("day gaaaames", regionalGames.filter(game => game.date == date))
		// setDayGames(regionalGames.filter(game => game['date'] == date));
		// setDayGames(games.filter(game => game['date'] == date));
	}

	useEffect(() => {
		console.log('day gaames', dayGames);
	}, [dayGames])

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
