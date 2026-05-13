'use client';

import { use } from 'react';
import Bracket from '../../../components/SupersBracket';


export default function Super({ params }: { params: Promise<{ venue: number }> }) {
  const { venue } = use(params);

  return (
    <Bracket venue={venue} />
  )
}