'use client';

import Game from './Game';
import { usePathname } from 'next/navigation';
import { Games } from '../types';
import { Grid, Text } from '@mantine/core';

export default function Day(props: Games) {
	const pathname = usePathname();

	let events = props.games.map((game: any)=> {
		return <Grid.Col key={game.id} span={3}><Game game={game} description={game.description} pathname={pathname}/></Grid.Col>
	});

	return (
		<Grid mt="lg" gutter="xl">
			{events && events}
			{events.length == 0 && <Text>No games scheduled yet</Text>}
		</Grid>
	)
}