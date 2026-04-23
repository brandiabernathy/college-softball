import Image from 'next/image';
import { Game as GameType } from '../types';
import { Box, Flex, Paper, Stack, Text } from '@mantine/core';

type GameProps = {
  game: GameType;
  description?: string;
}

export default function Game({ game, description }: GameProps) {

	return (
    <Paper p="md" w="100%">
      <Stack gap="xxs">
        <Text size="md" fw="bold">
          {game.status.type.description == 'Scheduled' ?
            <>{game.time ? game.time : game.status.type.shortDetail}</>
          :
            <>{game.status.type.shortDetail}</>
          }
        </Text>

        <Flex align="center" justify="space-between">
          <Flex gap="xs" align="center">
            <Image
              src={game.away.team.logo}
              alt={game.away.team.location}
              width={25}
              height={25}
              className="mr-2"
            />
            <Flex gap={0} c={(game.status.type.completed && !game.away.winner ? 'gray.6' : '')}>
              {game.away.curatedRank && <Text size="xl">{game.away.curatedRank.current}&nbsp;</Text>}
              <Text size="xl">{game.away.team.location}</Text>
            </Flex>

          </Flex>
          <Flex pos="relative">
            {game.status.type.description != 'Scheduled' && <Text size="xl">{game.away.score}</Text>}
            {game.away.winner &&
              <Box
                style={{
                  position: 'absolute',
                  borderTopColor: 'transparent',
                  borderBottomColor: 'transparent',
                  borderRightColor: 'black',
                  borderStyle: 'solid',
                  borderRightWidth: '8px',
                  borderTopWidth: '8px',
                  borderBottomWidth: '8px',
                  borderLeftWidth: '0px',
                  top: '9px',
                  right: '-16px'
                }}></Box>
              }
          </Flex>
        </Flex>
      
        <Flex align="center" justify="space-between">
          <Flex gap="xs" align="center">
            <Image
                src={game.home.team.logo}
                alt={game.home.team.location}
                width={25}
                height={25}
                className="mr-2"
            />
            <Flex gap={0} c={(game.status.type.completed && !game.home.winner ? 'gray.6' : '')}>
              {game.home.curatedRank && <Text size="xl">{game.home.curatedRank.current}&nbsp;</Text>}
              <Text size="xl">{game.home.team.location}</Text>
            </Flex>

          </Flex>
          <Flex pos="relative">
            {game.status.type.description != 'Scheduled' && <Text size="xl">{game.home.score}</Text>}
            {game.home.winner &&
              <Box
                style={{
                  position: 'absolute',
                  borderTopColor: 'transparent',
                  borderBottomColor: 'transparent',
                  borderRightColor: 'black',
                  borderStyle: 'solid',
                  borderRightWidth: '8px',
                  borderTopWidth: '8px',
                  borderBottomWidth: '8px',
                  borderLeftWidth: '0px',
                  top: '9px',
                  right: '-16px'
                }}></Box>
              }
          </Flex>
        </Flex>

        <Flex>
          <Text size="md">{description ? description : game.description}</Text>
        </Flex>
      </Stack>
    </Paper>
	)
}