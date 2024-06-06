'use client';
import { useState, useEffect } from 'react';
import Game from '../components/Game';
import { useAppContext } from '../context/app';
import dayjs from 'dayjs';
var utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

export default function Home() {
	const { games, setGames, year, setYear } = useAppContext();

	const [ worldSeriesGames, setWorldSeriesGames] = useState<any[]>([]);
	const [ champGames, setChampGames ] = useState<any[]>([]);

	useEffect(() => {
		setYear(dayjs().year());
	}, [])

	useEffect(() => {
		fetch(`https://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard?limit=1000&dates=${year}0501-${year}0615`)
			.then((res) => res.json())
			.then((data) => {
				if(data.events) {
					console.log('data.events', data.events);
					setGames(data.events
						.sort((a: any, b: any) => a.date < b.date ? -1 : 1)
						.filter((game: any) => game.status.type.detail != 'Postponed')
						.map((game: any) => ({
							id: game.id,
							status: game.status,
							home: game.competitions[0].competitors[0],
							away: game.competitions[0].competitors[1],
							description: game.competitions[0].notes,
							// description: game.competitions[0].notes[0].headline.substring(game.competitions[0].notes[0].headline.indexOf("-") + 1).trim() : '',
							broadcast:  game.competitions[0].broadcasts.length ? game.competitions[0].broadcasts[0].names.join("/") : 'TBD',
							venue: game.competitions[0].venue.id,
							location: game.competitions[0].venue.address.city.replace(/\s+/g, '-').toLowerCase(),
							season: game.season
						})));
				}
		 	});
	}, [year]);

	useEffect(() => {
		console.log("games", games);
		setWorldSeriesGames(games.filter((game: any) => game.season.type === 5));
		setChampGames(games.filter((game: any) => game.season.type === 6));
	}, [games])

	return (
		<div className="overflow-x-scroll">
			<h2 className="text-3xl mb-8">Women&apos;s College World Series</h2>
			{ worldSeriesGames.length == 0 && <p className="text-xl">Bracket will appear closer to May 30</p> }
			{ worldSeriesGames.length > 0 && <div className="grid grid-cols-4 gap-8 min-w-[1000px]">
				<div className="col-span-3">
					<div className="flex gap-8 items-center mb-10">
						<div className="flex flex-wrap gap-8 w-1/3">
							<div>Bracket 1 <br />
								<span className="font-bold">Winner&apos;s Bracket</span>
							</div>

							<div className="relative w-full after:block after:absolute after:bottom-10 after:-right-24 after:w-24 after:h-10 after:border-t-2 after:border-r-2">
								<Game key="1" game={worldSeriesGames[1]} />
							</div>
							<div className="relative w-full after:block after:absolute after:top-12 after:-right-24 after:w-24 after:h-10 after:border-b-2 after:border-r-2">
								<Game key="0" game={worldSeriesGames[0]} />
							</div>

							<div className="h-4 w-full"></div>

							<div className="font-bold">Elimination Bracket</div>
							<div className="w-full relative after:block after:absolute after:top-3 after:-right-24 after:w-24 after:h-16 after:border-b-2 after:border-r-2">
								{ worldSeriesGames[4] && <Game key="4" game={worldSeriesGames[4]} /> }
							</div>
						</div>
						<div className="flex flex-wrap gap-8 w-1/3">
							<div className="h-4"></div>

							<div className="w-full relative after:block after:absolute after:-bottom-24 after:right-20 after:w-4 after:h-24 after:border-r-2">
								{ worldSeriesGames[6] && <Game key="6" game={worldSeriesGames[6]} /> }
							</div>

							<div className="h-8"></div>
							{ worldSeriesGames[8] && <Game key="8" game={worldSeriesGames[8]} />}
						</div>
						<div className="flex flex-wrap gap-8 w-1/3">
							<div className="h-10"></div>
							{ worldSeriesGames[10] && <Game key="10" game={worldSeriesGames[10]} /> }
							{/* usually game 11 is the elimination game here but in 2024 a weather delay pushed the elimination game to game 12 */}
							{ (worldSeriesGames[11].description === 'Elimination Game' || worldSeriesGames[12].description === 'Elimination Game') &&
								<>
									{ (worldSeriesGames[11] && worldSeriesGames[11].description === 'Elimination Game') && <Game key="11" game={worldSeriesGames[11]} /> }
									{ (worldSeriesGames[12] && worldSeriesGames[12].description === 'Elimination Game') && <Game key="12" game={worldSeriesGames[12]} /> }
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
								<Game key="2" game={worldSeriesGames[2]} />
							</div>
							<div className="relative w-full after:block after:absolute after:top-14 after:-right-24 after:w-24 after:h-10 after:border-b-2 after:border-r-2">
								<Game key="3" game={worldSeriesGames[3]} />
							</div>

							<div className="h-4 w-full"></div>

							<div className="font-bold">Elimination Bracket</div>
							<div className="w-full relative after:block after:absolute after:top-3 after:-right-24 after:w-24 after:h-16 after:border-b-2 after:border-r-2">
								{ worldSeriesGames[5] && <Game key="5" game={worldSeriesGames[5]} /> }
							</div>
						</div>
						<div className="flex flex-wrap gap-8 w-1/3">
							<div className="h-4"></div>
							<div className="w-full relative after:block after:absolute after:-bottom-24 after:right-20 after:w-4 after:h-24 after:border-r-2">
								{ worldSeriesGames[7] && <Game key="7" game={worldSeriesGames[7]} /> }
							</div>

							<div className="h-8"></div>
							{ worldSeriesGames[9] && <Game key="9" game={worldSeriesGames[9]} /> }
						</div>
						<div className="flex flex-wrap gap-8 w-1/3">
							<div className="h-10"></div>
							{/* first bracket goes to elimination game? this will be game 12, otherwise it will be game 11 */}
							{/* if game 11 is an elimination game, it's in the other bracket */}
							{ (worldSeriesGames[11] && worldSeriesGames[11].description !== 'Elimination Game') && <Game key="11" game={worldSeriesGames[11]} />}

						</div>
					</div>
				</div>


				<div className="flex flex-wrap gap-8 h-fit">
					<div className="h-fit text-xl">FINALS</div>
					{ champGames[0] && <Game key="champ-1" game={champGames[0]} /> }
					{ champGames[1] && <Game key="champ-2" game={champGames[1]} /> }
					{ champGames[2] && <Game key="champ-3" game={champGames[2]} /> }
				</div>
			</div> }
		</div>
	)
}
