import Header from '../../../components/Header';
import Bracket from '../../../components/RegionalsBracket';

export default function SeattleRegional() {

	return (
		<>
			<Header />
			<main className="bg-slate-100 py-5">
				<div className="container mx-auto mb-5">
					<h2 className="text-3xl mb-5">Los Angeles Regional</h2>
					<Bracket venue="4993" />
				</div>
			</main>
		</>
	)
}