'use client'
import React from 'react';
import Image from 'next/image';

export default function Home() {

	return (
		<>
			<h2 className="text-3xl mb-8">Women's College World Series</h2>
			<div className="grid grid-cols-4 gap-8">
				<div className="col-span-3">
					<div className="flex gap-8 items-center mb-10">
						<div className="flex flex-wrap gap-8 w-1/3">
							<div>Bracket 1 <br />
								<span className="font-bold">Winner's Bracket</span>
							</div>
							<div className="h-fit w-full bg-white p-4 rounded text-base relative after:block after:absolute after:bottom-10 after:-right-24 after:w-24 after:h-10 after:border-t-2 after:border-r-2">
								<span className="font-semibold">June 1 - 2:30pm ET - ESPN</span>
								<div className="flex items-center justify-between my-1 relative">
									<div className="flex">
										<Image
											src="https://a.espncdn.com/i/teamlogos/ncaa/500/201.png"
											alt="Oklahoma"
											width={25}
											height={25}
											className="mr-2"
										/>
										<span className="text-xl mr-2 text-slate-400">1</span>
										<span className="text-xl">Oklahoma</span>
									</div>
								</div>
								<div className="flex items-center justify-between my-1 relative">
									<div className="flex">
										<Image
											src="https://a.espncdn.com/i/teamlogos/ncaa/500/24.png"
											alt="Stanford"
											width={25}
											height={25}
											className="mr-2"
										/>
										<span className="text-xl mr-2 text-slate-400">9</span>
										<span className="text-xl">Stanford</span>
									</div>
								</div>
							</div>
							<div className="h-fit w-full bg-white p-4 rounded text-base relative after:block after:absolute after:top-12 after:-right-24 after:w-24 after:h-10 after:border-b-2 after:border-r-2">
								<span className="font-semibold">June 1 - 12pm ET - ESPN</span>
								<div className="flex items-center justify-between my-1 relative">
								<div className="flex">
										<Image
											src="https://a.espncdn.com/i/teamlogos/ncaa/500/333.png"
											alt="Alabama"
											width={25}
											height={25}
											className="mr-2"
										/>
										<span className="text-xl mr-2 text-slate-400">5</span>
										<span className="text-xl">Alabama</span>
									</div>
								</div>
								<div className="flex items-center justify-between my-1 relative">
									<div className="flex">
										<Image
											src="https://a.espncdn.com/i/teamlogos/ncaa/500/2633.png"
											alt="Stanford"
											width={25}
											height={25}
											className="mr-2"
										/>
										<span className="text-xl mr-2 text-slate-400">4</span>
										<span className="text-xl">Tennessee</span>
									</div>
								</div>
							</div>
							<div className="h-4 w-full"></div>
							<div className="font-bold">Elimination Bracket</div>
							<div className="h-fit w-full bg-white p-4 rounded text-base relative after:block after:absolute after:top-3 after:-right-24 after:w-24 after:h-16 after:border-b-2 after:border-r-2">
								<span className="font-semibold">June 2 - 7pm ET - ESPN</span>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
							</div>
						</div>
						<div className="flex flex-wrap gap-8 w-1/3">
							<div className="h-4"></div>
							<div className="h-fit w-full bg-white p-4 rounded text-base relative after:block after:absolute after:-bottom-24 after:right-20 after:w-4 after:h-24 after:border-r-2">
								<span className="font-semibold">June 3 - 3pm ET - ABC</span>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
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
							<div className="h-fit w-full bg-white p-4 rounded text-base relative after:block after:absolute after:bottom-10 after:-right-24 after:w-24 after:h-10 after:border-t-2 after:border-r-2">
								<span className="font-semibold">June 1 - 7pm ET - ESPN</span>
								<div className="flex items-center justify-between my-1 relative">
									<div className="flex">
										<Image
											src="https://a.espncdn.com/i/teamlogos/ncaa/500/52.png"
											alt="Florida State"
											width={25}
											height={25}
											className="mr-2"
										/>
										<span className="text-xl mr-2 text-slate-400">3</span>
										<span className="text-xl">Florida State</span>
									</div>
								</div>
								<div className="flex items-center justify-between my-1 relative">
									<div className="flex">
										<Image
											src="https://a.espncdn.com/i/teamlogos/ncaa/500/197.png"
											alt="Oklahoma State"
											width={25}
											height={25}
											className="mr-2"
										/>
										<span className="text-xl mr-2 text-slate-400">6</span>
										<span className="text-xl">Oklahoma State</span>
									</div>
								</div>
							</div>
							<div className="h-fit w-full bg-white p-4 rounded text-base relative after:block after:absolute after:top-14 after:-right-24 after:w-24 after:h-10 after:border-b-2 after:border-r-2">
								<span className="font-semibold">June 1 - 9:30pm ET - ESPN</span>
								<div className="flex items-center justify-between my-1 relative">
									<div className="flex">
										<Image
											src="https://a.espncdn.com/i/teamlogos/ncaa/500/264.png"
											alt="Washington"
											width={25}
											height={25}
											className="mr-2"
										/>
										<span className="text-xl mr-2 text-slate-400">7</span>
										<span className="text-xl">Washington</span>
									</div>
								</div>
								<div className="flex items-center justify-between my-1 relative">
									<div className="flex">
										<Image
											src="https://a.espncdn.com/i/teamlogos/ncaa/500/254.png"
											alt="Utah"
											width={25}
											height={25}
											className="mr-2"
										/>
										<span className="text-xl mr-2 text-slate-400">15</span>
										<span className="text-xl">Utah</span>
									</div>
								</div>
							</div>
							<div className="h-4 w-full"></div>
							<div className="font-bold">Elimination Bracket</div>
							<div className="h-fit w-full bg-white p-4 rounded text-base relative after:block after:absolute after:top-3 after:-right-24 after:w-24 after:h-16 after:border-b-2 after:border-r-2">
								<span className="font-semibold">June 2 - 9:30pm ET - ESPN</span>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
							</div>
						</div>
						<div className="flex flex-wrap gap-8 w-1/3">
							<div className="h-4"></div>
							<div className="h-fit w-full bg-white p-4 rounded text-base  relative after:block after:absolute after:-bottom-24 after:right-20 after:w-4 after:h-24 after:border-r-2">
								<span className="font-semibold">June 3 - 7pm ET - ESPN</span>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
								<div className="flex items-center justify-between my-1 relative">
									<div className="h-7"></div>
								</div>
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
		</>
	)
}
