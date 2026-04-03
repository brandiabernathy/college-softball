import { useEffect } from 'react';
import { Flex, Stack, Text } from '@mantine/core';
import { Game as GameType } from '../types';

type GameLineProps = {
  game: GameType;
}

export default function GameLine({ game }: GameLineProps) {

    useEffect(() => {
        console.log("game!!", game)
    }, [game])

	return (
    <Stack>
      <Flex c={game.status.type.completed && !game.away.winner ? 'dimmed' : ''}>
        {game.away.curatedRank && <Text>#{game.away.curatedRank?.current}</Text>}&nbsp;
        <Text>{game.away.team.shortDisplayName}</Text>
      </Flex>

        {/* {game.status.type.description != 'Scheduled' && <span className={"w-5 text-center font-semibold " + (game.status.type.completed && !game.away.winner ? 'text-slate-400' : '')}>{game.away.score}</span>}
        
        {game.status.type.description == 'Scheduled' && <span>&nbsp;</span>}
        
        <span className="w-16 text-center">
            {game.status.type.description != 'Scheduled' && game.status.type.shortDetail}
          {game.status.type.description == 'Scheduled' && game.time}
      </span>

      {game.status.type.description != 'Scheduled' && <span className={"w-5 text-center font-semibold " + (game.status.type.completed && !game.home.winner ? 'text-slate-400' : '')}>{game.home.score}</span>}  */}

      <Flex c={game.status.type.completed && !game.home.winner ? 'dimmed' : ''}>
        {game.home.curatedRank && <Text>#{game.home.curatedRank?.current}</Text>}&nbsp;
        <Text>{game.home.team.shortDisplayName}</Text>
      </Flex>
    </Stack>
	)
}