import Image from 'next/image';

export default function Game(props) {

    console.log('props', props);
	return (
		<div className="flex justify-center items-center h-fit w-full bg-white p-2 text-base">
            <div className="flex items-center my-1 relative">
                <div className="flex">
                    {props.game.away_rank && <span className="mr-1">#{props.game.away.curatedRank.current}</span>}
                    <span className={" " + (props.game.status.type.completed && !props.game.away.winner ? 'text-slate-400' : '')}>{props.game.away.team.location}</span>
                </div>
                {props.game.status.type.description != 'Scheduled' && <span className={"w-5 text-center" + (props.game.status.type.completed && !props.game.away.winner ? 'text-slate-400' : '')}>{props.game.away.score}</span>}            </div>
            <span className="font-semibold w-12 text-center">{props.game.status.type.shortDetail}</span>
            <div className="flex items-center my-1 relative">
                {props.game.status.type.description != 'Scheduled' && <span className={"w-5 text-center" + (props.game.status.type.completed && !props.game.home.winner ? 'text-slate-400' : '')}>{props.game.home.score}</span>} 
                <div className="flex">
                    {props.game.home_rank && <span className="mr-1">#{props.game.home.curatedRank.current}</span>}
                    <span className={"" + (props.game.status.type.completed && !props.game.home.winner ? 'text-slate-400' : '')}>{props.game.home.team.location}</span>
                </div>
            </div>
		</div>
	)
}