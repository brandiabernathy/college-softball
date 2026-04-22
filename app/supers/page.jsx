'use client'

import { useAppSelector } from '../store';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Button, Flex, Grid, Text } from '@mantine/core';
import Day from '../../components/Day';
import Box from '../../components/VenueBox';

var utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

export default function Supers() {
	const { games } = useAppSelector(state => state.app);
	const [supersGames, setSupersGames] = useState([]);
	const [dayGames, setDayGames] = useState([]);
	const [selectedDate, setSelectedDate] = useState('');
	const [venueBoxes, setVenueBoxes] = useState([]);
	const [supersDates, setSupersDates] = useState();

	useEffect(() => {
		setSupersGames(games.filter(game => game.season.type === 4));
	}, [games]);

	useEffect(() => {
		if (supersGames && supersGames?.length > 0) {
			setSupersDates([...new Set(supersGames.map(game => game.date))]);

			console.log('supers games', supersGames);

			// find all locations
			let venues = supersGames
				.map((item) => ({
					location: item.venue.address.city,
					id: item.venue.id,
					address: {
						city: item.venue.address.city,
						state: item.venue.address.state
					},
					home_rank: item.home.curatedRank || 99
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
		}
	},[supersGames]);

	function filterGames(date) {
		setSelectedDate (date);
		console.log("super day games", games.filter(game => game['date'] == date));
		setDayGames(supersGames.filter(game => game['date'] == date));
	}

	return (
		<>
			<Flex>
				<Button variant="transparent" onClick={() => filterGames('')}>All</Button>
				{supersDates && supersDates.map(date => {
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
