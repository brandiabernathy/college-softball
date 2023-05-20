'use client'
import React from 'react';
import Image from 'next/image';
import axios from 'axios';
import Game from './components/Game';
import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import Header from '/app/components/Header';

export default function Home() {
  const [games, setGames] = React.useState([]);
  useEffect(() => {
		axios
		.get('http://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard')
		.then(response => {
			// console.log(response.data.events);
			setGames(response.data.events.map(game => ({
				id: game.id,
				date: game.date,
				status: game.status,
				home_team: game.competitions[0].competitors[0].team.location,
				home_score: parseInt(game.competitions[0].competitors[0].score),
        home_rank: game.competitions[0].competitors[0].curatedRank,
				away_team: game.competitions[0].competitors[1].team.location,
				away_score: parseInt(game.competitions[0].competitors[1].score),
        away_rank: game.competitions[0].competitors[1].curatedRank,
				home_logo: game.competitions[0].competitors[0].team.logo,
				away_logo: game.competitions[0].competitors[1].team.logo,
        description: game.competitions[0].notes[0].headline.substring(game.competitions[0].notes[0].headline.indexOf("-") + 1),
        broadcast: game.competitions[0].broadcasts[0].names[0],
			})));
		})
	}, []);

	let events = games.map(item => {
		return <Game key={item.id} game={item} />
	});

  return (
    <main className="">
      <Header />
      <main className="bg-slate-100">
        <div className="grid grid-cols-4 gap-3 container mx-auto py-5">
          { events }
        </div>
      </main>
    </main>
  )
}
