
import Bracket from '../../../components/RegionalsBracket';

export default function AthensRegional() {

	return (
		<>
			<h2 className="text-3xl mb-5">Athens Regional</h2>
			{/* @ts-expect-error */}
			<Bracket venue="4994" />
		</>
	)
}