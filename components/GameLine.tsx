import { SingleGame } from '../types';

export default function Game(props: SingleGame) {

	return (
		<div className={"grid grid-cols-game py-0.5 text-lg items-center " + (props.game.status.type.description == 'In Progress' ? 'bg-emerald-100' : '')}>
            <div className={"text-right pr-1 " + (props.game.status.type.completed && !props.game.away.winner ? 'text-slate-400' : '')}>
                {props.game.away_rank !== 99 && <span className="mr-1">#{props.game.away_rank}</span>}
                <span>{props.game.away.team.shortDisplayName}</span>
            </div>
            {props.game.status.type.description != 'Scheduled' && <span className={"w-5 text-center font-semibold " + (props.game.status.type.completed && !props.game.away.winner ? 'text-slate-400' : '')}>{props.game.away.score}</span>}
            {props.game.status.type.description == 'Scheduled' && <span>&nbsp;</span>}
            <span className="w-16 text-center">
                {props.game.status.type.description != 'Scheduled' && props.game.status.type.shortDetail}
                {props.game.status.type.description == 'Scheduled' && props.game.time}
            </span>
            {props.game.status.type.description != 'Scheduled' && <span className={"w-5 text-center font-semibold " + (props.game.status.type.completed && !props.game.home.winner ? 'text-slate-400' : '')}>{props.game.home.score}</span>} 
            {props.game.status.type.description == 'Scheduled' && <span>&nbsp;</span>}
            <div className={"pl-1 " + (props.game.status.type.completed && !props.game.home.winner ? 'text-slate-400' : '')}>
                {props.game.home_rank !== 99 && <span className="mr-1">#{props.game.home_rank}</span>}
                <span>{props.game.home.team.shortDisplayName}</span>
            </div>
		</div>
	)
}