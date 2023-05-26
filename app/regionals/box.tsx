'use client'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Box from '../../components/VenueBox';

export default function Regionals() {

	const [games, setGames] = useState([]);

	function getAllGames() {
		axios
		.get('https://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard?limit=1000&dates=20230519-20230522')
		.then(response => {
			setGames(response.data.events
				.sort((a, b) => a.date < b.date ? -1 : 1)
				.map(game => ({
					id: game.id,
					date: game.date,
					status: game.status,
					home: game.competitions[0].competitors[0],
					away: game.competitions[0].competitors[1],
					home_rank: game.competitions[0].competitors[0].curatedRank,
					away_rank: game.competitions[0].competitors[1].curatedRank,
					description: game.competitions[0].notes[0].headline.substring(game.competitions[0].notes[0].headline.indexOf("-") + 1),
					broadcast: game.competitions[0].broadcasts[0].names[0],
          venue: game.competitions[0].venue.id,
					location: game.competitions[0].venue.address.city.replace(/\s+/g, '-').toLowerCase(),
			})));
		})
	}

	function getVenueGames() {

	}


	useEffect(() => {
		getAllGames();
	}, []);

  return (
    <>
      <Header />
      <main className="bg-slate-100 py-5">
        <div className="grid min-[730px]:grid-cols-2 min-[1410px]:grid-cols-4 gap-3 mx-auto max-w-8xl">
          <Box venue="4990" games={games} name="Norman"/>
          <Box venue="6342" games={games} name="Clemson"/>
          <Box venue="6519" games={games} name="Durham"/>
          <Box venue="6670" games={games} name="Stanford"/>
          <Box venue="4991" games={games} name="Tuscaloosa"/>
          <Box venue="6205" games={games} name="Evanston"/>
          <Box venue="6207" games={games} name="Austin"/>
          <Box venue="5000" games={games} name="Knoxville"/>
          <Box venue="4999" games={games} name="Tallahassee"/>
          <Box venue="4994" games={games} name="Athens"/>
          <Box venue="5229" games={games} name="Fayetteville"/>
          <Box venue="6206" games={games} name="Stillwater"/>
          <Box venue="5262" games={games} name="Seattle"/>
          <Box venue="4974" games={games} name="Baton Rouge"/>
          <Box venue="5399" games={games} name="Salt Lake City"/>
          <Box venue="4993" games={games} name="Los Angeles"/>
        </div>
      </main>
    </>
  )
}
