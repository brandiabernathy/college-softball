import React from 'react';
import axios from 'axios';
import Game from './Game';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Day(props) {
	// const [games, setGames] = useState([]);

	const pathname = usePathname();



	let events = props.games.map(item => {
		return <Game key={item.id} game={item} description={item.description} pathname={pathname}/>
	});

	return (
		<div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[1000px]:grid-cols-3 lg:grid-cols-4 gap-3">
			{events && events}
		</div>
	)
}