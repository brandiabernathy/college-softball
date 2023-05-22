import Header from '../../../components/Header';
import Bracket from '../../../components/SupersBracket';

export default function SeattleSupers() {

	return (
		<>
			<Header />
			<main className="bg-slate-100 py-5">
				<div className="container mx-auto mb-5">
					<h2 className="text-3xl mb-5">Knoxville Super Regional</h2>
					<Bracket venue="5000" />
				</div>
			</main>
		</>
	)
}