'use client';

import Game from './Game';
import { Game as GameType } from '../types';
import { Grid, Text } from '@mantine/core';

type DayProps = {
	games: GameType[];
}

export default function Day({ games }: DayProps) {

	return (
		<Grid mt="lg" gutter="xl">
			{games ?
				games.map(game => {
					return <Grid.Col key={game.id} span={3}><Game game={game} /></Grid.Col>
				})
			:
				<Text>No games scheduled yet</Text>
			}
		</Grid>
	)
}