'use client'
import React from 'react';
import Header from '../../components/Header';
import Day from '../../components/Day';

export default function Supers() {

  const [date, setDate] = React.useState('20230525');

  function changeDay(day) {
    setDate(day);
	}

  return (
    <>
      <Header />
      <main className="bg-slate-100 py-5">
        <div className="max-w-8xl mx-auto mb-5 text-xl">
          <span onClick={() => changeDay('20230525')} className={"cursor-pointer " + (date == '20230525' ? 'underline text-blue-900' : '')}>Thursday</span> |&nbsp;
          <span onClick={() => changeDay('20230526')} className={"cursor-pointer " + (date == '20230526' ? 'underline text-blue-900' : '')}>Friday</span> |&nbsp;
          <span onClick={() => changeDay('20230527')} className={"cursor-pointer " + (date == '20230527' ? 'underline text-blue-900' : '')}>Saturday</span> |&nbsp;
          <span onClick={() => changeDay('20230528')} className={"cursor-pointer " + (date == '20230528' ? 'underline text-blue-900' : '')}>Sunday</span>
        </div>
        <Day date={date} />
      </main>
    </>
  )
}
