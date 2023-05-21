'use client'
import React from 'react';
import Header from '../../app/components/Header';
import Bracket from '../../app/components/Bracket';

export default function StillwaterRegional() {

  return (
    <>
      <Header />
      <main className="bg-slate-100 py-5">
        <div className="container mx-auto mb-5">
          <Bracket venue="6206" />
        </div>
      </main>
    </>
  )
}