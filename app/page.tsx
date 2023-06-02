'use client'
import React from 'react';
import dayjs from 'dayjs';
import Game from '../components/Game';

var utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

async function getInfo() {
	const res = await fetch('https://site.api.espn.com/apis/site/v2/sports/baseball/college-softball/scoreboard?limit=1000&dates=20230601-20230609');
	return res.json();
}

export default async function Home() {
	const info = await getInfo();

	const games = info.events
		.sort((a, b) => a.date < b.date ? -1 : 1)
		.map(game => ({
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
		}))


	return (
		<div className="overflow-x-scroll">
			<h2 className="text-3xl mb-8">Women's College World Series</h2>
			<div className="grid grid-cols-4 gap-8 min-w-[1000px]">
				<div className="col-span-3">
					<div className="flex gap-8 items-center mb-10">
						<div className="flex flex-wrap gap-8 w-1/3">
							<div>Bracket 1 <br />
								<span className="font-bold">Winner's Bracket</span>
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
								<Game key="4" game={games[4]} />
							</div>
						</div>
						<div className="flex flex-wrap gap-8 w-1/3">
							<div className="h-4"></div>

							<div className="w-full relative after:block after:absolute after:-bottom-24 after:right-20 after:w-4 after:h-24 after:border-r-2">
								<Game key="5" game={games[5]} />
							</div>

							<div className="h-8"></div>
							<div className="h-fit w-full bg-white p-4 rounded text-base">
								<span className="font-semibold">June 4 - 3pm ET - ABC</span>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
							</div>
						</div>
						<div className="flex flex-wrap gap-8 w-1/3">
							<div className="h-10"></div>
							<div className="h-fit w-full bg-white p-4 rounded text-base relative after:block after:absolute after:-left-8 after:top-10 after:w-8 after:h-4 after:border-t-2">
								<span className="font-semibold">June 5 - 12pm ET - ESPN</span>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
							</div>
							<div className="h-fit w-full bg-white p-4 rounded text-base relative after:block after:absolute after:-top-8 after:right-20 after:w-4 after:h-8 after:border-r-2">
								<span className="font-semibold">June 5 - 2:30pm ET - ESPN</span>
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
								<span className="font-bold">Winner's Bracket</span>
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
								<Game key="5" game={games[5]} />
							</div>
						</div>
						<div className="flex flex-wrap gap-8 w-1/3">
							<div className="h-4"></div>
							<div className="w-full relative after:block after:absolute after:-bottom-24 after:right-20 after:w-4 after:h-24 after:border-r-2">
								<Game key="5" game={games[5]} />
							</div>

							<div className="h-8"></div>
							<div className="h-fit w-full bg-white p-4 rounded text-base">
								<span className="font-semibold">June 4 - 7pm ET - ESPN2</span>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
							</div>
						</div>
						<div className="flex flex-wrap gap-8 w-1/3">
							<div className="h-10"></div>
							<div className="h-fit w-full bg-white p-4 rounded text-base relative after:block after:absolute after:-left-8 after:top-10 after:w-8 after:h-4 after:border-t-2">
								<span className="font-semibold">June 5 - 7pm ET - ESPN</span>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
							</div>
							<div className="h-fit w-full bg-white p-4 rounded text-base relative after:block after:absolute after:-top-8 after:right-20 after:w-4 after:h-8 after:border-r-2">
								<span className="font-semibold">June 5 - 9:30pm ET - ESPN</span>
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
						<span className="font-semibold">June 7 - 8pm ET - ESPN</span>
						<div className="flex items-center justify-between my-1 relative">
							<div className="h-7"></div>
						</div>
						<div className="flex items-center justify-between my-1 relative">
							<div className="h-7"></div>
						</div>
					</div>
					<div className="h-fit w-full bg-white p-4 rounded text-base">
						<span className="font-semibold">June 8 - 7:30pm ET - ESPN</span>
						<div className="flex items-center justify-between my-1 relative">
							<div className="h-7"></div>
						</div>
						<div className="flex items-center justify-between my-1 relative">
							<div className="h-7"></div>
						</div>
					</div>
					<div className="h-fit w-full bg-white p-4 rounded text-base">
						<span className="font-semibold">June 9 - 8pm ET - ESPN</span>
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
