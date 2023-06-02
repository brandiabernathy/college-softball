
import Bracket from '../../../components/RegionalsBracket';

export default function TallahasseeRegional() {

	return (
		<>
			<h2 className="text-3xl mb-5">Tallahassee Regional</h2>
			{/* @ts-expect-error */}
			<Bracket venue="4999" />
		</>
	)
}