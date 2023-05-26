'use client'
import React from 'react';
import Header from '../../components/Header';
import Day from '../../components/Day';

export default function Regionals() {

	const [date, setDate] = React.useState('20230521');

	function changeDay(day) {
		setDate(day);
	}

	return (
		<>
			<Header />
			<main className="bg-slate-100 py-5">
				<section className="container max-w-8xl">
					<div className="mb-5 text-xl">
						<span onClick={() => changeDay('20230519')} className={"cursor-pointer " + (date == '20230519' ? 'underline text-blue-900' : '')}>Friday</span> |&nbsp;
						<span onClick={() => changeDay('20230520')} className={"cursor-pointer " + (date == '20230520' ? 'underline text-blue-900' : '')}>Saturday</span> |&nbsp;
						<span onClick={() => changeDay('20230521')} className={"cursor-pointer " + (date == '20230521' ? 'underline text-blue-900' : '')}>Sunday</span>
					</div>
					<Day date={date} />
				</section>
			</main>
		</>
	)
}
