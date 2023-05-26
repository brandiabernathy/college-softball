import React from 'react';
import Game from './Game';
import { usePathname } from 'next/navigation';
import { Games } from '../types';

export default function Day(props: Games) {
	console.log('props', props);

	const pathname = usePathname();

	let events = props.games.map((game: any)=> {
		return <Game key={game.id} game={game} description={game.description} pathname={pathname}/>
	});

	return (
		<div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[1000px]:grid-cols-3 lg:grid-cols-4 gap-3">
			{events && events}
			{events.length == 0 && <p className="text-xl">No games scheduled yet</p>}
		</div>
	)
}