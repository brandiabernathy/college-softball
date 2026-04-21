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
		.filter((game: any) => game.venue.id == venue.id)
		.map((game: any)=> {
			// console.log("game", game)
			return <Game key={game.id} game={game}/>
	});

	return (
		<Paper withBorder p="sm">
			{name &&
				// <Link href={pathname + "/" + venue}>
					<Text tt="uppercase" size="lg" ta="center" fw="bold">{name.replace("-", ' ')}</Text>
				// </Link>
			}
			{events}
		</Paper>
	)
}