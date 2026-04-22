'use client'

import { useState, useEffect } from 'react';
import { useAppSelector } from '../store';
import { Button, Flex, Grid, Text } from '@mantine/core';
import dayjs from 'dayjs';
import Day from '../../components/Day';
import Box from '../../components/VenueBox';
import { Game, Venue } from '@/types';

var utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

export default function Supers() {
  const { games } = useAppSelector(state => state.app);
  const [supersGames, setSupersGames] = useState<Game[]>([]);
  const [dayGames, setDayGames] = useState<Game[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [supersDates, setSupersDates] = useState<string[]>([]);
  const [supersVenues, setSupersVenues] = useState<Venue[]>([]);

  useEffect(() => {
    setSupersGames(games.filter(game => game.season.type === 4));
  }, [games]);

  useEffect(() => {
    if (supersGames && supersGames?.length > 0) {
      setSupersDates([...new Set(supersGames.map(game => game.date))]);

      // find all locations
      let venues = supersGames.map((item) => ({
        location: item.venue.address.city,
        id: item.venue.id,
        address: {
          city: item.venue.address.city,
          state: item.venue.address.state
        },
        home_rank: item.home.curatedRank || 99
      }))
      // filter to only find unique locations
      .filter((obj, index, self) => 
        index === self.findIndex((v) => v.id === obj.id)
      );

      setSupersVenues(venues);
    }
  },[supersGames]);

  function filterGames(date: string) {
    setSelectedDate(date);
    setDayGames(supersGames.filter(game => game['date'] == date));
  }

  return (
    <>
      <Flex>
        <Button variant="transparent" onClick={() => filterGames('')}>All</Button>
        {supersDates && supersDates.map(date => {
          return (
            <Flex key={date} align="center">
              <Text>|</Text>
              <Button variant="transparent" onClick={() => filterGames(date)} className={"cursor-pointer " + (selectedDate == date ? 'underline text-royal-blue' : '')}>{dayjs(date).format('dddd')}</Button>
            </Flex>
          )
        })}
      </Flex>

      {selectedDate &&
        <Day games={dayGames} />
      }

      {!selectedDate && supersVenues &&
        <Grid>
          {supersVenues.map((venue)=> {
            return <Grid.Col key={venue.id} span={3}><Box venue={venue} games={supersGames} name={venue.address.city}/></Grid.Col>
          })}
        </Grid>
      }
    </>
  )
}
