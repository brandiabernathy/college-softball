'use client';
import Game from './Game';
import { Bracket } from '../types';
import { useState, useEffect } from 'react';
import { Flex } from '@mantine/core';

export default function Day(props: Bracket) {
	const [games, setGames] = useState(null);

	useEffect(() => {
		fetch('https://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard?limit=1000&dates=20240517-20240520')
			.then((res) => res.json())
			.then((data) => {
				setGames(data.events
				.filter((game: any) => game.competitions[0].venue.id == props.venue)
				.sort((a: any, b: any) => a.date < b.date ? -1 : 1)
				.map((game: any) => ({
					id: game.id,
					date: game.date,
					status: game.status,
					home: game.competitions[0].competitors[0],
					away: game.competitions[0].competitors[1],
					home_rank: game.competitions[0].competitors[0].curatedRank,
					away_rank: game.competitions[0].competitors[1].curatedRank,
					description: game.competitions[0].notes[0].headline.substring(game.competitions[0].notes[0].headline.indexOf("-") + 1),
					broadcast: game.competitions[0].broadcasts.length ? game.competitions[0].broadcasts[0].names.join("/") : 'TBD',
					location: game.competitions[0].venue.address.city.replace(/\s+/g, '-').toLowerCase(),
				})))
			});
			// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{games && 
				<Flex align="center" gap="lg">
					<Flex w="25%" direction="column" gap="lg">
						<Game key="0" game={games[0]} description="Opening Round"/>
						<Game key="1" game={games[1]} description="Opening Round"/>
						<Game key="3" game={games[3]} description="Elimination Game"/>
					</Flex>

					<Flex w="25%" direction="column" gap="lg">
						<Game key="2" game={games[2]} description="Winner's Bracket"/>
						<Game key="4" game={games[4]} description="Elimination Game"/>
					</Flex>
					
					<Flex w="25%" direction="column" gap="lg">
						{games[5] && <Game key="5" game={games[5]} description="Regional Final"/>}
						{games[6] && <Game key="6" game={games[6]} description="Regional Final - If Necessary"/>}
					</Flex>
				</Flex>
			}
		</>
	)
}