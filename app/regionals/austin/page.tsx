
import Bracket from '../../../components/RegionalsBracket';

export default function AustinRegional() {

	return (
		<>
			<h2 className="text-3xl mb-5">Austin Regional</h2>
			{/* @ts-expect-error */}
			<Bracket venue="6207" />
		</>
	)
}