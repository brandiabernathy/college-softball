import Game from './Game';
import { Bracket } from '../types';

async function getInfo() {
	const res = await fetch('https://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard?limit=1000&dates=20230525-20230528');
	return res.json();
}

export default async function Day(props: Bracket) {
	const info = await getInfo();

	const games = info.events
		.filter((game: any) => game.competitions[0].venue.id == props.venue)
		.sort((a: any, b: any) => a.date < b.date ? -1 : 1)
		.map((game: any) => ({
			id: game.id,
			date: game.date,
			status: game.status,
			home: game.competitions[0].competitors[0],
			away: game.competitions[0].competitors[1],
			home_rank: game.competitions[0].competitors[0].curatedRank,
			away_rank: game.competitions[0].competitors[1].curatedRank,
			description: game.competitions[0].notes[0].headline.substring(game.competitions[0].notes[0].headline.indexOf("-") + 1),
			broadcast: game.competitions[0].broadcasts[0].names[0],
			location: game.competitions[0].venue.address.city.replace(/\s+/g, '-').toLowerCase(),
		}));

	return (
		<section>
			{games.length && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				<Game key="0" game={games[0]} description="Game 1"/>
				<Game key="1" game={games[1]} description="Game 2"/>
				{games[2] && <div className="w-full"> <Game key="2" game={games[2]} description="Game 3 - If Necessary"/></div>}
			</div>}
		</section>
	)
}