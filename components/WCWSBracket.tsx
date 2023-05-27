'use client';
import Image from 'next/image';

export default function WCWSBracket() {

	return (
		<div className="container max-w-8xl">
            <div className="grid grid-cols-4 gap-3">
                <div className="col-span-3">
                    <div className="flex gap-3 items-center mb-10">
                        <div className="flex flex-wrap gap-3 w-1/3">
                            <div>Bracket 1</div>
                            <div className="h-fit w-full bg-white p-4 rounded text-base">
                                <span className="font-semibold">June 1 - 12pm ET</span>
                                <div className="h-7"></div>
                                <div className="h-7"></div>
                                <div className="text-slate-400">Winner's Bracket</div>
                            </div>
                            <div className="h-fit w-full bg-white p-4 rounded text-base">
                                <span className="font-semibold">June 1 - 2:30pm ET</span>
                                <div className="h-7"></div>
                                <div className="h-7"></div>
                                <div className="text-slate-400">Winner's Bracket</div>
                            </div>
                            <div className="h-fit w-full bg-white p-4 rounded text-base">
                                <span className="font-semibold">June 2 - 7pm ET</span>
                                <div className="h-7"></div>
                                <div className="h-7"></div>
                                <div className="text-slate-400">Elimination Bracket</div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 w-1/3">
                            <div className="h-fit w-full bg-white p-4 rounded text-base">
                                <span className="font-semibold">June 3 - 3pm ET</span>
                                <div className="h-7"></div>
                                <div className="h-7"></div>
                            </div>
                            <div className="h-fit w-full bg-white p-4 rounded text-base">
                                <span className="font-semibold">June 4 - 3pm ET</span>
                                <div className="h-7"></div>
                                <div className="h-7"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 w-1/3">
                            <div className="h-fit w-full bg-white p-4 rounded text-base">
                                <span className="font-semibold">June 5 - 12pm ET</span>
                                <div className="h-7"></div>
                                <div className="h-7"></div>
                            </div>
                            <div className="h-fit w-full bg-white p-4 rounded text-base">
                                <span className="font-semibold">June 5 - 2:30pm ET</span>
                                <div className="h-7"></div>
                                <div className="h-7"></div>
                                <div className="text-slate-400">If Necessary</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center col-span-3">
                        <div className="flex flex-wrap gap-3 w-1/3">
                            <div>Bracket 2</div>
                            <div className="h-fit w-full bg-white p-4 rounded text-base">
                                <span className="font-semibold">June 1 - 7pm ET</span>
                                <div className="h-7"></div>
                                {/* <div className="flex items-center justify-between my-1 relative">
                                    <div className="flex">
                                        <Image
                                            src="https://a.espncdn.com/i/teamlogos/ncaa/500/197.png"
                                            alt="Oklahoma State"
                                            width={25}
                                            height={25}
                                            className="mr-2"
                                        />
                                        <span className="text-xl mr-2 text-slate-400">14</span>
                                        <span className="text-xl">Oklahoma State</span>
                                    </div>
                                </div> */}
                                <div className="flex items-center justify-between my-1 relative">
                                    <div className="flex">
                                        <Image
                                            src="https://a.espncdn.com/i/teamlogos/ncaa/500/197.png"
                                            alt="Oklahoma State"
                                            width={25}
                                            height={25}
                                            className="mr-2"
                                        />
                                        <span className="text-xl mr-2 text-slate-400">14</span>
                                        <span className="text-xl">Oklahoma State</span>
                                    </div>
                                </div>
                                <div className="text-slate-400">Winner's Bracket</div>
                            </div>
                            <div className="h-fit w-full bg-white p-4 rounded text-base">
                                <span className="font-semibold">June 1 - 9:30pm ET</span>
                                <div className="h-7"></div>
                                <div className="h-7"></div>
                                <div className="text-slate-400">Winner's Bracket</div>
                            </div>
                            <div className="h-fit w-full bg-white p-4 rounded text-base">
                                <span className="font-semibold">June 2 - 9:30pm ET</span>
                                <div className="h-7"></div>
                                <div className="h-7"></div>
                                <div className="text-slate-400">Elimination Bracket</div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 w-1/3">
                            <div className="h-fit w-full bg-white p-4 rounded text-base">
                                <span className="font-semibold">June 3 - 7pm ET</span>
                                <div className="h-7"></div>
                                <div className="h-7"></div>
                            </div>
                            <div className="h-fit w-full bg-white p-4 rounded text-base">
                                <span className="font-semibold">June 4 - 7pm ET</span>
                                <div className="h-7"></div>
                                <div className="h-7"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 w-1/3">
                            <div className="h-fit w-full bg-white p-4 rounded text-base">
                                <span className="font-semibold">June 5 - 7pm ET</span>
                                <div className="h-7"></div>
                                <div className="h-7"></div>
                            </div>
                            <div className="h-fit w-full bg-white p-4 rounded text-base">
                                <span className="font-semibold">June 5 - 9:30pm ET</span>
                                <div className="h-7"></div>
                                <div className="h-7"></div>
                                <div className="text-slate-400">If Necessary</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-wrap gap-3 h-fit">
                    <div className="h-fit">Finals</div>
                    <div className="h-fit w-full bg-white p-4 rounded text-base">
                        <span className="font-semibold">June 7 - 8pm ET</span>
                        <div className="h-7"></div>
                        <div className="h-7"></div>
                    </div>
                    <div className="h-fit w-full bg-white p-4 rounded text-base">
                        <span className="font-semibold">June 8 - 7:30pm ET</span>
                        <div className="h-7"></div>
                        <div className="h-7"></div>
                    </div>
                    <div className="h-fit w-full bg-white p-4 rounded text-base">
                        <span className="font-semibold">June 9 - 8pm - ET</span>
                        <div className="h-7"></div>
                        <div className="h-7"></div>
                        <div className="text-slate-400">If Necessary</div>
                    </div>
                </div>
            </div>
        </div>
	)
}