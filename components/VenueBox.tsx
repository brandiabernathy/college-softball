import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Game as GameType, Venue } from '../types';
import { Anchor, Paper, Text } from '@mantine/core';
import Game from './GameLine';

type VenueBoxProps = {
	games: GameType[];
	name: string;
	venue: Venue;
}

export default function VenueBox({ games, name, venue }: VenueBoxProps) {
	const pathname = usePathname();
	const [venueGames, setVenueGames] = useState<GameType[]>([]);
	
	useEffect(() => {
		setVenueGames(games.filter((game: any) => game.venue.id == venue.id && game.home.team.name !== 'TBD'));
	}, [games]);

	return (
		<Paper withBorder p="sm">
			{name &&
				<Anchor component={Link} href={pathname + "/" + venue.id}>
					<Text tt="uppercase" size="lg" ta="center" fw="bold" c="blue">{name.replace("-", ' ')}</Text>
				</Anchor>
			}
			{venueGames && venueGames.map((game: GameType)=> {
				return <Game key={game.id} game={game}/>
			})}
		</Paper>
	)
}
