'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Game from '../components/Game';
import dayjs from 'dayjs';
var utc = require('dayjs/plugin/utc')
dayjs.extend(utc);

export default function Home() {
	const [games, setGames] = useState<any[]>([]);

	useEffect(() => {
		fetch('https://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard?limit=1000&dates=20240530-20240607')
			.then((res) => res.json())
			.then((data) => {
				if(data.events) {
					setGames(data.events
						.sort((a: any, b: any) => a.date < b.date ? -1 : 1)
						.filter((game: any) => game.status.type.detail != 'Postponed')
						.map((game: any) => ({
							id: game.id,
							status: game.status,
							home: game.competitions[0].competitors[0],
							away: game.competitions[0].competitors[1],
							description: game.competitions[0].notes[0].headline.substring(game.competitions[0].notes[0].headline.indexOf("-") + 1).trim(),
							broadcast:  game.competitions[0].broadcasts.length ? game.competitions[0].broadcasts[0].names.join("/") : 'TBD',
							venue: game.competitions[0].venue.id,
							location: game.competitions[0].venue.address.city.replace(/\s+/g, '-').toLowerCase(),
						})));
				}
		 	});
	}, []);


	return (
		<div className="overflow-x-scroll">
			<h2 className="text-3xl mb-8">Women&apos;s College World Series</h2>
			{ games.length == 0 && <p className="text-xl">Bracket will appear closer to May 30</p> }
			{ games.length > 0 && <div className="grid grid-cols-4 gap-8 min-w-[1000px]">
				<div className="col-span-3">
					<div className="flex gap-8 items-center mb-10">
						<div className="flex flex-wrap gap-8 w-1/3">
							<div>Bracket 1 <br />
								<span className="font-bold">Winner&apos;s Bracket</span>
							</div>

							<div className="relative w-full after:block after:absolute after:bottom-10 after:-right-24 after:w-24 after:h-10 after:border-t-2 after:border-r-2">
								<Game key="1" game={games[1]} />
							</div>
							<div className="relative w-full after:block after:absolute after:top-12 after:-right-24 after:w-24 after:h-10 after:border-b-2 after:border-r-2">
								<Game key="0" game={games[0]} />
							</div>

							<div className="h-4 w-full"></div>

							<div className="font-bold">Elimination Bracket</div>
							<div className="w-full relative after:block after:absolute after:top-3 after:-right-24 after:w-24 after:h-16 after:border-b-2 after:border-r-2">
								{ games[4] && <Game key="4" game={games[4]} /> }
							</div>
						</div>
						<div className="flex flex-wrap gap-8 w-1/3">
							<div className="h-4"></div>

							<div className="w-full relative after:block after:absolute after:-bottom-24 after:right-20 after:w-4 after:h-24 after:border-r-2">
								{ games[6] && <Game key="6" game={games[6]} /> }
							</div>

							<div className="h-8"></div>
							{ games[8] && <Game key="8" game={games[8]} />}
						</div>
						<div className="flex flex-wrap gap-8 w-1/3">
							<div className="h-10"></div>
							{ games[10] && <Game key="10" game={games[10]} /> }
							{/* usually game 11 is the elimination game here but in 2024 a weather delay pushed the elimination game to game 12 */}
							{ (games[11].description === 'Elimination Game' || games[12].description === 'Elimination Game') &&
								<>
									{ (games[11] && games[11].description === 'Elimination Game') && <Game key="11" game={games[11]} /> }
									{ (games[12] && games[12].description === 'Elimination Game') && <Game key="12" game={games[12]} /> }
								</>
							}
						</div>
					</div>
					<div className="flex gap-8 items-center">
						<div className="flex flex-wrap gap-8 w-1/3">
							<div>Bracket 2 <br />
								<span className="font-bold">Winner&apos;s Bracket</span>
							</div>

							<div className="relative w-full after:block after:absolute after:bottom-10 after:-right-24 after:w-24 after:h-10 after:border-t-2 after:border-r-2">
								<Game key="2" game={games[2]} />
							</div>
							<div className="relative w-full after:block after:absolute after:top-14 after:-right-24 after:w-24 after:h-10 after:border-b-2 after:border-r-2">
								<Game key="3" game={games[3]} />
							</div>

							<div className="h-4 w-full"></div>

							<div className="font-bold">Elimination Bracket</div>
							<div className="w-full relative after:block after:absolute after:top-3 after:-right-24 after:w-24 after:h-16 after:border-b-2 after:border-r-2">
								{ games[5] && <Game key="5" game={games[5]} /> }
							</div>
						</div>
						<div className="flex flex-wrap gap-8 w-1/3">
							<div className="h-4"></div>
							<div className="w-full relative after:block after:absolute after:-bottom-24 after:right-20 after:w-4 after:h-24 after:border-r-2">
								{ games[7] && <Game key="7" game={games[7]} /> }
							</div>

							<div className="h-8"></div>
							{ games[9] && <Game key="9" game={games[9]} /> }
						</div>
						<div className="flex flex-wrap gap-8 w-1/3">
							<div className="h-10"></div>
							{/* first bracket goes to elimination game? this will be game 12, otherwise it will be game 11 */}
							{/* if game 11 is an elimination game, it's in the other bracket */}
							{ (games[11] && games[11].description !== 'Elimination Game') && <Game key="11" game={games[11]} />}

						</div>
					</div>
				</div>


				<div className="flex flex-wrap gap-8 h-fit">
					<div className="h-fit text-xl">FINALS</div>
					{ (games[12] && games[12].description !== 'Elimination Game') && <Game key="12" game={games[12]} /> }
					{ games[13] && <Game key="13" game={games[13]} /> }
					{ games[14] && <Game key="14" game={games[14]} /> }
				</div>
			</div> }
		</div>
	)
}
