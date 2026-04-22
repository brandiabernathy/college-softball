'use client';

import { useEffect, useState } from 'react';
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
	const [venueGames, setVenueGames] = useState<GameType[]>([]);
	
	useEffect(() => {
		setVenueGames(games.filter((game: any) => game.venue.id == venue.id));
	}, [games]);

	return (
		<Paper withBorder p="sm">
			{name &&
				// <Link href={pathname + "/" + venue}>
					<Text tt="uppercase" size="lg" ta="center" fw="bold">{name.replace("-", ' ')}</Text>
				// </Link>
			}
			{venueGames && venueGames.map((game: GameType)=> {
				return <Game key={game.id} game={game}/>
			})}
		</Paper>
	)
}