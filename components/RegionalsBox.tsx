'use client';
import React from 'react';
import Game from './GameLine';
import Link from 'next/link';

export default function Day(props) {

	let events = props.games
		.filter(game => game.venue == props.venue)
		.map(item => {
			return <Game key={item.id} game={item}/>
	});

	return (
		<div className="grid bg-white p-2">
			<div className="text-xl text-center mb-2"> <Link href={"/regionals/" + props.name.toLowerCase()}>{props.name} Regionals</Link></div>
			{events}
		</div>
	)
}