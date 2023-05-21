import Header from '../../../components/Header';
import Bracket from '../../../components/RegionalBracket';

export default function ClemsonRegional() {

	return (
		<>
			<Header />
			<main className="bg-slate-100 py-5">
				<div className="container mx-auto mb-5">
					<h2 className="text-3xl mb-5">Clemson Regional</h2>
					<Bracket venue="6342" />
				</div>
			</main>
		</>
	)
}