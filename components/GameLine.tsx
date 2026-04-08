
import { Flex, Group, Text } from '@mantine/core';
import { Game as GameType } from '../types';

type GameLineProps = {
  game: GameType;
}

export default function GameLine({ game }: GameLineProps) {

	return (
    <Group gap="xs">
      <Flex justify="flex-end" w={100} c={game.status.type.completed && !game.away.winner ? 'dimmed' : ''}>
        {game.away.curatedRank && <Text>#{game.away.curatedRank?.current}</Text>}&nbsp;
        <Text>{game.away.team.shortDisplayName}</Text>
      </Flex>

      {game.status.type.description !== 'Scheduled' && <Text w={15} ta="center">{game.away.score}</Text>}
        
      <Text w={40} ta="center">{game.status.type.description === 'Scheduled' ? <>{game.time}</> : <>{game.status.type.shortDetail}</>}</Text>
      
      {game.status.type.description !== 'Scheduled' && <Text w={15} ta="center">{game.home.score}</Text>} 

      <Flex w={100} c={game.status.type.completed && !game.home.winner ? 'dimmed' : ''}>
        {game.home.curatedRank && <Text>#{game.home.curatedRank?.current}</Text>}&nbsp;
        <Text>{game.home.team.shortDisplayName}</Text>
      </Flex>
    </Group>
	)
}