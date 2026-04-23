'use client';
import Game from './Game';
import { Game as GameType } from '../types';
import { useAppSelector } from '@/app/store';
import { useState, useEffect } from 'react';
import { Flex } from '@mantine/core';

type BracketProps = {
	venue: number;
}

export default function Bracket({ venue }: BracketProps) {
	const { games } = useAppSelector(state => state.app);
	const [bracketGames, setBracketGames] = useState<GameType[]>([]);

	useEffect(() => {
		setBracketGames(games.filter(game => game.season.type === 4 && game.venue.id === venue));
	}, [games]);

	return (
		<section>
			{games &&
				<Flex align="center" gap="lg">
					<Flex w="25%">
						<Game key="0" game={bracketGames[0]} description="Game 1"/>
					</Flex>
					
					<Flex w="25%">
						<Game key="1" game={bracketGames[1]} description="Game 2"/>
					</Flex>
					
					<Flex w="25%">
						{games[2] && <div className="w-full"> <Game key="2" game={bracketGames[2]} description="Game 3 - If Necessary"/></div>}
					</Flex>
				</Flex>
			}
		</section>
	)
}