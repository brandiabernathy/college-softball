'use client'
import React from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Day from '../../components/Day';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

export default function Regionals() {
	const [games, setGames] = useState([]);
	const [dayGames, setDayGames] = useState([]);
	const [selectedDate, setSelectedDate] = useState([]);

	function getGames() {
		axios
		.get('https://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard?limit=1000&dates=20230519-20230522')
		.then(response => {
			if(response.data.events.length) {
				setGames(response.data.events.map(game => ({
					id: game.id,
					date: dayjs(game.date).format('YYYYMMDD'),
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

	function filterGames(date) {
		setSelectedDate (date);
		setDayGames(games.filter(game => game.date == date));
	}

	return (
		<>
			<Header />
			<main className="bg-slate-100 py-5">
				<section className="container max-w-8xl">
					<div className="mb-5 text-xl">
						<span onClick={() => filterGames('20230519')} className={"cursor-pointer " + (selectedDate == '20230519' ? 'underline text-blue-900' : '')}>Friday</span> |&nbsp;
						<span onClick={() => filterGames('20230520')} className={"cursor-pointer " + (selectedDate == '20230520' ? 'underline text-blue-900' : '')}>Saturday</span> |&nbsp;
						<span onClick={() => filterGames('20230521')} className={"cursor-pointer " + (selectedDate == '20230521' ? 'underline text-blue-900' : '')}>Sunday</span>
					</div>
					<Day games={dayGames} />
				</section>
			</main>
		</>
	)
}
