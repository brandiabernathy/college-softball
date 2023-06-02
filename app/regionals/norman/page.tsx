
import Bracket from '../../../components/RegionalsBracket';

export default function NormanRegional() {

	return (
		<>
			<h2 className="text-3xl mb-5">Norman Regional</h2>
			{/* @ts-expect-error */}
			<Bracket venue="4990" />
		</>
	)
}