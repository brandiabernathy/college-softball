'use client'
import React from 'react';
import Header from '../app/components/Header';
import Day from '../app/components/Day';

export default function Supers() {

  const [date, setDate] = React.useState('20230526');

  function changeDay(day) {
    setDate(day);
	}

  return (
    <>
      <Header />
      <main className="bg-slate-100 py-5">
        <div className="container mx-auto mb-5 text-xl">
          <span onClick={() => changeDay('20230526')} className={"cursor-pointer " + (date == '20230526' ? 'underline text-blue-900' : '')}>Friday</span> |&nbsp;
          <span onClick={() => changeDay('20230527')} className={"cursor-pointer " + (date == '20230527' ? 'underline text-blue-900' : '')}>Saturday</span> |&nbsp;
          <span onClick={() => changeDay('20230528')} className={"cursor-pointer " + (date == '20230528' ? 'underline text-blue-900' : '')}>Sunday</span>
        </div>
        <Day date={date} />
      </main>
    </>
  )
}
