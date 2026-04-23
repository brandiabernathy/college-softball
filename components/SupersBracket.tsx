'use client';
import Game from './Game';
import { Game as GameType } from '../types';
import { useAppSelector } from '@/app/store';
import { useState, useEffect } from 'react';
import { Flex, Stack, Title } from '@mantine/core';

type BracketProps = {
	venue: number;
}

export default function Bracket({ venue }: BracketProps) {
	const { games } = useAppSelector(state => state.app);
	const [bracketGames, setBracketGames] = useState<GameType[]>([]);
	const [venueName, setVenueName] = useState<string>('');

	useEffect(() => {
		setBracketGames(games.filter(game => game.season.type === 4 && game.venue.id === venue));
	}, [games]);

	useEffect(() => {
		if (bracketGames.length) {
			setVenueName(bracketGames[0].venue.address.city);
		}
	}, [bracketGames])

	return (
		<Stack>
			{venueName && <Title order={2} fw={400}>{venueName} Super Regional</Title>}
			{bracketGames && bracketGames.length && 
				<Flex align="center" gap="lg">
					<Flex w="25%">
						<Game key="0" game={bracketGames[0]} description="Game 1"/>
					</Flex>
					
					<Flex w="25%">
						<Game key="1" game={bracketGames[1]} description="Game 2"/>
					</Flex>
					
					<Flex w="25%">
						{bracketGames[2] && <Game key="2" game={bracketGames[2]} description="Game 3 - If Necessary"/>}
					</Flex>
				</Flex>
			}
		</Stack>
	)
}