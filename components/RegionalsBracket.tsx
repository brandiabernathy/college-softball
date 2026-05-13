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
		setBracketGames(games.filter(game => game.season.type === 3 && game.venue.id === venue));
	}, [games]);

	useEffect(() => {
		if (bracketGames.length) {
			setVenueName(bracketGames[0].venue.address.city);
		}
	}, [bracketGames])

	return (
		<Stack>
			{venueName && <Title order={2} fw={400}>{venueName} Regional</Title>}
			{bracketGames && bracketGames.length && 
				<Flex align="center" gap="lg">
					<Flex w="25%" direction="column" gap="lg">
						<Game key="0" game={bracketGames[0]} description="Opening Round"/>
						<Game key="1" game={bracketGames[1]} description="Opening Round"/>
						<Game key="3" game={bracketGames[3]} description="Elimination Game"/>
					</Flex>

					<Flex w="25%" direction="column" gap="lg">
						<Game key="2" game={bracketGames[2]} description="Winner's Bracket"/>
						<Game key="4" game={bracketGames[4]} description="Elimination Game"/>
					</Flex>
					
					<Flex w="25%" direction="column" gap="lg">
						{bracketGames[5] && <Game key="5" game={bracketGames[5]} description="Regional Final"/>}
						{bracketGames[6] && <Game key="6" game={bracketGames[6]} description="Regional Final - If Necessary"/>}
					</Flex>
				</Flex>
			}
		</Stack>
	)
}