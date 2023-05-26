import Header from '../../../components/Header';
import Bracket from '../../../components/SupersBracket';

export default function SeattleSupers() {

	return (
		<>
			<Header />
			<main className="bg-slate-100 py-5">
				<div className="container max-w-8xl">
					<h2 className="text-3xl mb-5">Salt Lake City Super Regional</h2>
					<Bracket venue="5399" />
				</div>
			</main>
		</>
	)
}