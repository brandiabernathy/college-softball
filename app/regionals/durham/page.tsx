
import Bracket from '../../../components/RegionalsBracket';

export default function DurhamRegional() {

	return (
		<>
			<h2 className="text-3xl mb-5">Durham Regional</h2>
			{/* @ts-expect-error */}
			<Bracket venue="6519" />
		</>
	)
}