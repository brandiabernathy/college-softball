
import Bracket from '../../../components/RegionalsBracket';

export default function SeattleRegional() {

	return (
		<>
			<h2 className="text-3xl mb-5">Seattle Regional</h2>
			{/* @ts-expect-error */}
			<Bracket venue="5262" />
		</>
	)
}