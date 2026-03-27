'use client';

import { use } from 'react';
import Bracket from '../../../components/RegionalsBracket';


export default function Regional({ params }: { params: Promise<{ venueId: string }> }) {
  const { venueId } = use(params);
  return (
    <Bracket venue={venueId} />
  )
}