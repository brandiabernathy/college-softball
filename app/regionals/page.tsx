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

export default function Regionals() {
  const { games } = useAppSelector(state => state.app);
  const [regionalsGames, setRegionalsGames] = useState<Game[]>([]);
  const [dayGames, setDayGames] = useState<Game[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [regionalsDates, setRegionalsDates] = useState<string[]>([]);
  const [regionalsVenues, setRegionalVenues] = useState<Venue[]>([]);

  useEffect(() => {
    setRegionalsGames(games.filter(game => game.season.type === 3));
  }, [games]);

  useEffect(() => {
    if (regionalsGames && regionalsGames?.length > 0) {
      setRegionalsDates([...new Set(regionalsGames.map(game => game.date))]);

      // find all locations
      let venues = regionalsGames.map((item) => ({
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

      setRegionalVenues(venues);

    }
    console.log("regionals games", regionalsGames);
  },[regionalsGames]);

  function filterGames(date: string) {
    setSelectedDate(date);
    setDayGames(regionalsGames.filter(game => game['date'] == date));
  }

  return (
    <>
      <Flex>
        <Button variant="transparent" onClick={() => filterGames('')}>All</Button>
        {regionalsDates && regionalsDates.map((date: string) => {
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

      {!selectedDate && regionalsVenues &&
        <Grid>
          {regionalsVenues.map((venue)=> {
            return <Grid.Col key={venue.id} span={3}><Box venue={venue} games={regionalsGames} name={venue.address.city}/></Grid.Col>
          })}
        </Grid>
      }
    </>
  )
}
