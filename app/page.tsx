'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Game from '../components/Game';

export default function Home() {
	const [games, setGames] = useState(null);

	useEffect(() => {
		fetch('https://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard?limit=1000&dates=20230601-20230609')
			.then((res) => res.json())
			.then((data) => {
				setGames(data.events
					.sort((a: any, b: any) => a.date < b.date ? -1 : 1)
					.filter((game: any) => game.status.type.detail != 'Postponed')
					.map((game: any) => ({
						id: game.id,
						status: game.status,
						home: game.competitions[0].competitors[0],
						away: game.competitions[0].competitors[1],
						home_rank: game.competitions[0].competitors[0].curatedRank,
						away_rank: game.competitions[0].competitors[1].curatedRank,
						description: game.competitions[0].notes[0].headline.substring(game.competitions[0].notes[0].headline.indexOf("-") + 1),
						broadcast: game.competitions[0].broadcasts[0].names.join("/"),
						venue: game.competitions[0].venue.id,
						location: game.competitions[0].venue.address.city.replace(/\s+/g, '-').toLowerCase(),
					})));
		 	});
	  }, []);


	return (
		<div className="overflow-x-scroll">
			<h2 className="text-3xl mb-8">Women&apos;s College World Series</h2>
			<div className="grid grid-cols-4 gap-8 min-w-[1000px]">
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
								{ !games[4] && <div className="h-fit w-full bg-white p-4 rounded text-base relative after:block after:absolute after:top-3 after:-right-24 after:w-24 after:h-16 after:border-b-2 after:border-r-2">
									<span className="font-semibold">6/2 - 7:00 PM EDT</span><span> - ESPN/ESPN+</span>
									<div className="flex items-center justify-between my-1 relative">
										<div className="h-7"></div>
									</div>
									<div className="flex items-center justify-between my-1 relative">
										<div className="h-7"></div>
									</div>
								</div> }
							</div>
						</div>
						<div className="flex flex-wrap gap-8 w-1/3">
							<div className="h-4"></div>

							<div className="w-full relative after:block after:absolute after:-bottom-24 after:right-20 after:w-4 after:h-24 after:border-r-2">
								{ games[6] && <Game key="6" game={games[6]} /> }
								{ !games[6] && <div className="h-fit w-full bg-white p-4 rounded text-base">
									<span className="font-semibold">6/3 - 3:00 PM EDT</span><span> - ABC/ESPN+</span>
									<div className="flex items-center justify-between my-1 relative">
										<div className="h-7"></div>
									</div>
									<div className="flex items-center justify-between my-1 relative">
										<div className="h-7"></div>
									</div>
								</div> }
							</div>

							<div className="h-8"></div>
							{ games[8] && <Game key="8" game={games[8]} />}
							{ !games[8] && <div className="h-fit w-full bg-white p-4 rounded text-base">
								<span className="font-semibold">6/4 - 3:00 PM EDT</span><span> - ABC/ESPN+</span>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
							</div> }
						</div>
						<div className="flex flex-wrap gap-8 w-1/3">
							<div className="h-10"></div>
							{ games[10] && <Game key="10" game={games[10]} /> }
							{ !games[10] &&<div className="h-fit w-full bg-white p-4 rounded text-base relative after:block after:absolute after:-left-8 after:top-10 after:w-8 after:h-4 after:border-t-2">
								<span className="font-semibold">6/5 - 12:00 PM EDT</span><span> - ESPN/ESPN+</span>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
							</div> }
							<div className="h-fit w-full bg-white p-4 rounded text-base relative after:block after:absolute after:-top-8 after:right-20 after:w-4 after:h-8 after:border-r-2">
								<span className="font-semibold">6/5 - 2:30 PM EDT</span><span> - ESPN/ESPN+</span>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
								<div className="text-slate-400">If Necessary</div>
							</div>
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
								{ !games[5] && <div className="h-fit w-full bg-white p-4 rounded text-base relative after:block after:absolute after:top-3 after:-right-24 after:w-24 after:h-16 after:border-b-2 after:border-r-2">
									<span className="font-semibold">6/2 - 9:30 PM EDT</span><span> - ESPN/ESPN+</span>
									<div className="flex items-center justify-between my-1 relative">
										<div className="h-7"></div>
									</div>
									<div className="flex items-center justify-between my-1 relative">
										<div className="h-7"></div>
									</div>
								</div> }
							</div>
						</div>
						<div className="flex flex-wrap gap-8 w-1/3">
							<div className="h-4"></div>
							<div className="w-full relative after:block after:absolute after:-bottom-24 after:right-20 after:w-4 after:h-24 after:border-r-2">
								{ games[7] && <Game key="7" game={games[7]} /> }
								{ !games[7] && <div className="h-fit w-full bg-white p-4 rounded text-base relative after:block after:absolute after:top-3 after:-right-24 after:w-24 after:h-16 after:border-b-2 after:border-r-2">
									<span className="font-semibold">6/3 - 7:00 PM EDT</span><span> - ESPN/ESPN+</span>
									<div className="flex items-center justify-between my-1 relative">
										<div className="h-7"></div>
									</div>
									<div className="flex items-center justify-between my-1 relative">
										<div className="h-7"></div>
									</div>
								</div> }
							</div>

							<div className="h-8"></div>
							{ games[9] && <Game key="9" game={games[9]} /> }
							{ !games[9] && <div className="h-fit w-full bg-white p-4 rounded text-base">
								<span className="font-semibold">6/4 - 7:00 PM EDT</span><span> - ESPN2/ESPN+</span>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
							</div> }
						</div>
						<div className="flex flex-wrap gap-8 w-1/3">
							<div className="h-10"></div>
							{ games[11] && <Game key="11" game={games[11]} />}
							{ !games[11] && <div className="h-fit w-full bg-white p-4 rounded text-base relative after:block after:absolute after:-left-8 after:top-10 after:w-8 after:h-4 after:border-t-2">
								<span className="font-semibold">6/5 - 7:00 PM EDT</span><span> - ESPN/ESPN+</span>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
							</div> }
							<div className="h-fit w-full bg-white p-4 rounded text-base relative after:block after:absolute after:-top-8 after:right-20 after:w-4 after:h-8 after:border-r-2">
								<span className="font-semibold">6/5 - 9:30 PM EDT</span><span> - ESPN/ESPN+</span>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
								<div className="text-slate-400">If Necessary</div>
							</div>
						</div>
					</div>
				</div>


				<div className="flex flex-wrap gap-8 h-fit">
					<div className="h-fit text-xl">FINALS</div>
					<div className="h-fit w-full bg-white p-4 rounded text-base">
						<span className="font-semibold">6/7 - 8:00 PM EDT</span><span> - ESPN/ESPN+</span>
						<div className="flex items-center justify-between my-1 relative">
							<div className="h-7"></div>
						</div>
						<div className="flex items-center justify-between my-1 relative">
							<div className="h-7"></div>
						</div>
					</div>
					<div className="h-fit w-full bg-white p-4 rounded text-base">
						<span className="font-semibold">6/8 - 7:30 PM EDT</span><span> - ESPN/ESPN+</span>
						<div className="flex items-center justify-between my-1 relative">
							<div className="h-7"></div>
						</div>
						<div className="flex items-center justify-between my-1 relative">
							<div className="h-7"></div>
						</div>
					</div>
					<div className="h-fit w-full bg-white p-4 rounded text-base">
						<span className="font-semibold">6/9 - 8:00 PM EDT</span><span> - ESPN/ESPN+</span>
						<div className="flex items-center justify-between my-1 relative">
							<div className="h-7"></div>
						</div>
						<div className="flex items-center justify-between my-1 relative">
							<div className="h-7"></div>
						</div>
						<div className="text-slate-400">If Necessary</div>
					</div>
				</div>
			</div>
		</div>
	)
}
