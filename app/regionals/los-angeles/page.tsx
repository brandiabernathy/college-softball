
import Bracket from '../../../components/RegionalsBracket';

export default function LosAngelesRegional() {

	return (
		<>
			<h2 className="text-3xl mb-5">Los Angeles Regional</h2>
			{/* @ts-expect-error */}
			<Bracket venue="4993" />
		</>
	)
}