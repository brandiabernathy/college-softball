'use client';

import { use } from 'react';
import Bracket from '../../../components/RegionalsBracket';


export default function Regional({ params }: { params: Promise<{ venue: number }> }) {
  const { venue } = use(params);

  return (
    <Bracket venue={venue} />
  )
}