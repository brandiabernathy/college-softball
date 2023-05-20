import Image from 'next/image';

export default function Game(props) {
	return (
		<div className="bg-white p-3.5 rounded text-base">
            {/* <div>{props.game.date}</div> */}
            <span className="font-semibold">{props.game.status.type.shortDetail}</span> - <span>{props.game.broadcast}</span>
            <div className="flex items-center justify-between my-1">
                <div className="flex">
                    <Image
                        src={props.game.home_logo}
                        alt={props.game.home_team}
                        width={25}
                        height={25}
                        className="mr-2"
                    />
                    {props.game.home_rank && <span className="text-xl mr-2 text-slate-500">{props.game.home_rank.current}</span>}
                    <span className="text-xl">{props.game.home_team}</span>
                </div>
                {props.game.status.type.description != 'Scheduled' && <span className="text-xl">{props.game.home_score}</span>}
            </div>
            <div className="flex items-center justify-between my-1">
                <div className="flex">
                    <Image
                        src={props.game.away_logo}
                        alt={props.game.away_team}
                        width={25}
                        height={25}
                        className="mr-2"
                    />
                    {props.game.away_rank && <span className="text-xl mr-2 text-slate-500">{props.game.away_rank.current}</span>}
                    <span className="text-xl">{props.game.away_team}</span>
                </div>
                {props.game.status.type.description != 'Scheduled' && <span className="text-xl">{props.game.away_score}</span>}
            </div>
            <div className="text-slate-500">{props.game.description}</div>
		</div>
	)
}