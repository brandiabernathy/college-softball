
import Bracket from '../../../components/SupersBracket';

export default function SaltLakeCitySupers() {

	return (
		<>
			<h2 className="text-3xl mb-5">Salt Lake City Super Regional</h2>
			{/* @ts-expect-error */}
			<Bracket venue="5399" />
		</>
	)
}