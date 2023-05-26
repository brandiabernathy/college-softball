'use client';
import React from 'react';
import Game from './GameLine';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Games } from '../types';

export default function VenueBox(props: Games) {
	const pathname = usePathname();

	let events = props.games
		.filter((game: any) => game.venue == props.venue)
		.map((game: any)=> {
			return <Game key={game.id} game={game}/>
	});

	return (
		<div className="grid bg-white p-2">
			<div className="text-xl text-center mb-2">
				{props.name &&
					<Link href={pathname + "/" + props.name.toLowerCase()}>
						{props.name}
						{pathname == '/supers' && <span> Super</span>}
						Regionals
					</Link>
				}
				</div>
			{events}
		</div>
	)
}