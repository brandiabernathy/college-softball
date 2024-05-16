import { Game } from '../types';

export default function Game(props: Game) {

	return (
		<div className="grid grid-cols-game py-0.5 text-base">
            <div className={"text-right " + (props.game.status.type.completed && !props.game.away.winner ? 'text-slate-400' : '')}>
                {props.game.away_rank && <span className="mr-1">#{props.game.away.curatedRank.current}</span>}
                <span>{props.game.away.team.location}</span>
            </div>
            {props.game.status.type.description != 'Scheduled' && <span className={"w-5 text-center font-semibold " + (props.game.status.type.completed && !props.game.away.winner ? 'text-slate-400' : '')}>{props.game.away.score}</span>}
            {props.game.status.type.description == 'Scheduled' && <span>&nbsp;</span>}
            <span className="w-12 text-center">
                {props.game.status.type.description != 'Scheduled' && props.game.status.type.shortDetail}
                {props.game.status.type.description == 'Scheduled' && props.game.time}
            </span>
            {props.game.status.type.description != 'Scheduled' && <span className={"w-5 text-center font-semibold " + (props.game.status.type.completed && !props.game.home.winner ? 'text-slate-400' : '')}>{props.game.home.score}</span>} 
            {props.game.status.type.description == 'Scheduled' && <span>&nbsp;</span>}
            <div className={"" + (props.game.status.type.completed && !props.game.home.winner ? 'text-slate-400' : '')}>
                {props.game.home_rank && <span className="mr-1">#{props.game.home.curatedRank.current}</span>}
                <span>{props.game.home.team.location}</span>
            </div>
		</div>
	)
}