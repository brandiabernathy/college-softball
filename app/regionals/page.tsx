'use client'

import { useState, useEffect } from 'react';
import { useAppSelector } from '../store';
import { Game } from '@/types';
import Day from '../../components/Day';
import Box from '../../components/VenueBox';
import dayjs from 'dayjs';

var utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

export default function Regionals() {
	const { games } = useAppSelector(state => state.app);
	const [dayGames, setDayGames] = useState<Game[]>([]);
	const [selectedDate, setSelectedDate] = useState('');
	const [venueBoxes, setVenueBoxes] = useState([]);
	const [regionalDates, setRegionalDates] = useState<string[]>([]);
	const [regionalGames, setRegionalGames] = useState<Game[]>([]);

	useEffect(() => {
		console.log('gamessss', games)
		setRegionalGames(games.filter(game => game.season.type === 3));
	}, [games]);

	useEffect(() => {
		console.log('regional games', regionalGames);
		if (regionalGames && regionalGames?.length > 0) {
			setRegionalDates([...new Set(regionalGames.map(game => game.date))]);

			// find all locations
		let venues = regionalGames
			.map((item) => ({
				location: item.venue.address.city,
				id: item.venue,
				home_rank: item.home.curatedRank?.current || 99
			}))
			.sort((a, b) => a.home_rank > b.home_rank ? 1 : -1)
			.filter((v,i,a)=>a.findIndex(v2=>(v.location === v2.location))===i);

			console.log("venues", venues);
		let boxes = venues
			.map((venue, index)=> {
				return <Box key={index} venue={venue.id} games={games} name={venue.location}/>
			});

		setVenueBoxes(boxes);
		}
	}, [regionalGames]);

	// useEffect(() => {
	// 	// setRegionalDates([...new Set(games.map(game => game.date))]);
	// 	setRegionalDates([...new Set(regionalGames.map(game => game.date))]);

	// 	// find all locations
	// 	let venues = regionalGames
	// 		.map((item) => ({
	// 			location: item.location,
	// 			id: item.venue,
	// 			home_rank: item.home_rank
	// 		}))
	// 		.sort((a, b) => a.home_rank > b.home_rank ? 1 : -1)
	// 		.filter((v,i,a)=>a.findIndex(v2=>(v.location === v2.location))===i);

	// 	let boxes = venues
	// 		.map((venue)=> {
	// 			return <Box key={venue.id} venue={venue.id} games={games} name={venue.location}/>
	// 		});

	// 	setVenueBoxes(boxes);
	// },[games]);

	function filterGames(date: string) {
		setSelectedDate (date);
		setDayGames(regionalGames.filter(game => game['date'] == date));
	}

	return (
		<>
		{regionalDates && regionalDates.map(date => {
				return (
					<div key={date}>
						&nbsp;|&nbsp;
						<span onClick={() => filterGames(date)} className={"cursor-pointer " + (selectedDate == date ? '' : '')}>{dayjs(date).format('dddd')}</span>
					</div>
				)
			})}
			<div className="mb-5 text-xl">
				<span onClick={() => filterGames('')} className={"cursor-pointer " + (selectedDate == '' ? 'underline text-royal-blue' : '')}>All</span>
				{regionalDates && regionalDates.map(date => {
					return (
						<div key={date}>
							&nbsp;|&nbsp;
							<span onClick={() => filterGames(date)} className={"cursor-pointer " + (selectedDate == date ? 'underline text-royal-blue' : '')}>{dayjs(date).format('dddd')}</span>
						</div>
					)
				})}
			</div>

			{/* {selectedDate &&
				<Day games={dayGames} />
			} */}

			{!selectedDate &&
				<div className="grid min-[730px]:grid-cols-2 min-[1410px]:grid-cols-4 gap-3">
					{venueBoxes}
				</div>
			}
		</>
	)
}
