'use client'
import React from 'react';
import Header from './components/Header';
import Day from './components/Day';

export default function Home() {

  return (
    <>
      <Header />
      <main className="bg-slate-100 py-5">
          <Day date="20230520" />
      </main>
    </>
  )
}
