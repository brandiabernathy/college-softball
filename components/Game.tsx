import Image from 'next/image';

export default function Game(props) {

    console.log('props', props);
	return (
		<div className="w-full bg-white p-4 rounded text-base">
            <span className="font-semibold">{props.game.status.type.shortDetail}</span> {!props.game.status.type.completed && <span> - {props.game.broadcast}</span>}
            <div className="flex items-center justify-between my-1 relative">
                <div className="flex">
                    <Image
                        src={props.game.away.team.logo}
                        alt={props.game.away.team.location}
                        width={25}
                        height={25}
                        className="mr-2"
                    />
                    {props.game.away_rank && <span className="text-xl mr-2 text-slate-400">{props.game.away.curatedRank.current}</span>}
                    <span className={"text-xl " + (props.game.status.type.completed && !props.game.away.winner ? 'text-slate-400' : '')}>{props.game.away.team.location}</span>
                </div>
                {props.game.status.type.description != 'Scheduled' && <span className={"text-xl " + (props.game.status.type.completed && !props.game.away.winner ? 'text-slate-400' : '')}>{props.game.away.score}</span>}
                {props.game.away.winner && <div className="border-solid border-r-black border-r-8 border-y-transparent border-y-8 border-l-0 absolute -right-4"></div>}
            </div>
            <div className="flex items-center justify-between my-1 relative">
                <div className="flex">
                    <Image
                        src={props.game.home.team.logo}
                        alt={props.game.home.team.location}
                        width={25}
                        height={25}
                        className="mr-2"
                    />
                    {props.game.home_rank && <span className="text-xl mr-2 text-slate-400">{props.game.home.curatedRank.current}</span>}
                    <span className={"text-xl " + (props.game.status.type.completed && !props.game.home.winner ? 'text-slate-400' : '')}>{props.game.home.team.location}</span>
                </div>
                {props.game.status.type.description != 'Scheduled' && <span className={"text-xl " + (props.game.status.type.completed && !props.game.home.winner ? 'text-slate-400' : '')}>{props.game.home.score}</span>}
                {props.game.home.winner && <div className="border-solid border-r-black border-r-8 border-y-transparent border-y-8 border-l-0 absolute -right-4"></div>}
            </div>
            <div className="text-slate-400">{props.description}</div>
		</div>
	)
}