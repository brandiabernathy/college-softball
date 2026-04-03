'use client';

import Game from './GameLine';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Game as GameType, Venue } from '../types';
import { Text, Paper } from '@mantine/core';

type VenueBoxProps = {
	games: GameType[];
	name: string;
	venue: Venue;
}

export default function VenueBox({ games, name, venue }: VenueBoxProps) {
	const pathname = usePathname();

	let events = games
		.filter((game: any) => game.venue == venue)
		.map((game: any)=> {
			return <Game key={game.id} game={game}/>
	});

	return (
		<Paper shadow="xs" withBorder>
			{name &&
				<Link href={pathname + "/" + venue.id}>
					<Text>{name.replace("-", ' ')}</Text>
				</Link>
			}
			{events}
		</Paper>
	)
}