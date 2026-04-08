import Image from 'next/image';
import { Game as GameType } from '../types';
import { Flex, Paper, Stack, Text } from '@mantine/core';

type GameProps = {
  game: GameType;
  description: string;
}

export default function Game({ game, description }: GameProps) {

	return (
    <Paper p="md" w="100%">
      <Stack gap="xs">
        <Text fw="bold">
          {game.status.type.description == 'Scheduled' ?
            <>{game.time ? game.time : game.status.type.shortDetail}</>
          :
            <>{game.status.type.shortDetail}</>
          }
        </Text>

        <Flex align="center" justify="space-between">
          <Flex gap="xs">
            <Image
              src={game.away.team.logo}
              alt={game.away.team.location}
              width={25}
              height={25}
              className="mr-2"
            />
            {game.away.curatedRank && <Text>{game.away.curatedRank.current}</Text>}
            <Text c={(game.status.type.completed && !game.away.winner ? 'gray.6' : '')}>{game.away.team.location}</Text>
          </Flex>
          <Flex>
            {game.status.type.description != 'Scheduled' && <Text>{game.away.score}</Text>}
            {/* {game.away.winner && <div className="border-solid border-r-black border-r-8 border-y-transparent border-y-8 border-l-0 absolute -right-4"></div>} */}
          </Flex>
        </Flex>
      
        <Flex align="center" justify="space-between">
          <Flex gap="xs">
            <Image
                src={game.home.team.logo}
                alt={game.home.team.location}
                width={25}
                height={25}
                className="mr-2"
            />
            {game.home.curatedRank && <Text>{game.home.curatedRank.current}</Text>}
            <Text c={(game.status.type.completed && !game.home.winner ? 'gray.6' : '')}>{game.home.team.location}</Text>
          </Flex>
          <Flex>
            {game.status.type.description != 'Scheduled' && <Text>{game.home.score}</Text>}
            {/* {game.home.winner && <div className="border-solid border-r-black border-r-8 border-y-transparent border-y-8 border-l-0 absolute -right-4"></div>} */}
          </Flex>
        </Flex>

        <Flex>
          <Text>{description}</Text>
        </Flex>
      </Stack>
    </Paper>
	)
}