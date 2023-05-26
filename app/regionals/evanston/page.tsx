import Header from '../../../components/Header';
import Bracket from '../../../components/RegionalsBracket';

export default function EvanstonRegional() {

	return (
		<>
			<Header />
			<main className="bg-slate-100 py-5">
				<div className="container max-w-8xl">
					<h2 className="text-3xl mb-5">Evanston Regional</h2>
					<Bracket venue="6205" />
				</div>
			</main>
		</>
	)
}