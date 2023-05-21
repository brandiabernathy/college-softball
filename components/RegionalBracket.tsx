'use client';
import React from 'react';
import Image from 'next/image';
import axios from 'axios';
import Game from './Game';
import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

export default function Day(props) {
    const [games, setGames] = useState([]);


    useEffect(() => {
		axios
		.get('http://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard?limit=1000&dates=20230519-20230522')
		.then(response => {
            console.log('response', response);
            setGames(response.data.events
                .filter(game => game.competitions[0].venue.id == props.venue)
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
            })));
		})
	}, []);

    console.log("games", games);
    console.log("games[0]", games[0]);
    let game = games[0]

	let events = games.map(item => {
		return <Game key={item.id} game={item} />
	});
	return (
        <section className="grid grid-cols-4 container gap-3 mx-auto auto-rows-auto">
            <div className="grid gap-3">
                <Game key="0" game={games[0]} description="Opening Round"/>
                <Game key="1" game={games[1]} description="Opening Round"/>
                <Game key="3" game={games[3]} description="Elimination Game"/>
            </div>
            <div className="grid gap-3">
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div className="flex flex-wrap w-full gap-3">
                    <Game key="2" game={games[2]} description="Winner's Bracket"/>
                    <Game key="4" game={games[4]} description="Elimination Game"/>
                </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
            </div>
            <div className="grid gap-3">
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                {games[5] && <div className="w-full"> <Game key="5" game={games[5]} description="Regional Final"/></div>}
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
            </div>
            <div className="grid gap-3">
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                {games[6] && <div className="w-full"> <Game key="6" game={games[6]} description="Regional Final - If Necessary"/></div>}
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
            </div>
        </section>
	)
}